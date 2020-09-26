import { Targetable } from './Targetable';
import { BattlefieldRegion } from '../classes/BattlefieldRegion';
import { Status } from '../classes/Status';
import { ResourceInventory } from '../classes/Resource';

export enum UnitFaction {
    Tank = '👤', Drone = '🤖', Creature = '🐛'
}

export interface Unit extends Targetable {

    containingRegion?: BattlefieldRegion;
    faction: UnitFaction;
    buildCost: ResourceInventory;

    wound(amount: number): void;

    heal(amount: number): void;

    addStatus(status: Status): void;

    moveTo(region: BattlefieldRegion): void;

    die(dropItems?: boolean): void;

}