// Some of this code was originally written by Nicole Prindle for Aurora. Used with permission.

export namespace Objects {
    export function safeKeys<T>(x: T): (keyof T)[] {
        return Object.keys(x) as (keyof T)[];
    }

    export function safeEntries<T>(x: T): [keyof T, T[keyof T]][] {
        return Object.entries(x) as [keyof T, T[keyof T]][];
    }

    /**
     * Returns a map of keys to instances in a multiton by searching for keys in
     * the constructor associated with instances of that type.
     */
    // We would use <T extends new(...args: any[]) => InstanceType<T>> and then
    // use InstanceType<T> instead, but that won't work for private constructors.
    export function multitonEntries<T>(cons: Function & { prototype: T; }): Record<keyof typeof cons, T> {
        const res: Partial<Record<keyof typeof cons, T>> = {};
        Objects.safeEntries(cons)
            .filter((t): t is [keyof typeof cons, T] => t[1] instanceof cons)
            .forEach(([k, v]) => { res[k] = v; });
        return res as Record<keyof typeof cons, T>;
    }

    /**
     * Returns a list of instances of a multiton by searching for keys in
     * the constructor associated with instances of that type.
     */
    export function multitonValues<T>(cons: Function & { prototype: T; }): T[] {
        return Objects.safeKeys(cons)
            .map(k => cons[k])
            .filter((v): v is T => v instanceof cons);
    }

    export function multitonKey<T>(cons: Function & { prototype: T; }, toFind: T): string {
        for (const key of Objects.safeKeys(cons)) {
            if (cons[key] === toFind) {
                return key;
            }
        }
        throw new Error('Invalid multiton passed into multitonKey');
    }

    export function enumKey(obj: Object, value: any): string {
        for (const key of Objects.safeKeys(obj)) {
            if (obj[key] === value) {
                return key;
            }
        }
        throw new Error('invalid enum passed into enumKey');
    }

}