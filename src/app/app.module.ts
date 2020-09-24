/* eslint-disable @typescript-eslint/no-extraneous-class */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnitComponent } from './unit/unit.component';
import { BattlefieldRegionComponent } from './battlefield-region/battlefield-region.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';
import { CombatScreenComponent } from './combat-screen/combat-screen.component';
import { SkillComponent } from './skill/skill.component';
import { InventoryScreenComponent } from './inventory-screen/inventory-screen.component';
import { FormatInfinityPipe } from './format-infinity.pipe';
import { UnitBuildScreenComponent } from './unit-build-screen/unit-build-screen.component';
import { DefaultMessagePipe } from './default-message.pipe';
import {ButtonModule} from 'primeng/button';

@NgModule({
    declarations: [
        AppComponent,
        UnitComponent,
        BattlefieldRegionComponent,
        BattlefieldComponent,
        CombatScreenComponent,
        SkillComponent,
        InventoryScreenComponent,
        FormatInfinityPipe,
        UnitBuildScreenComponent,
        DefaultMessagePipe
    ],
    imports: [
        BrowserModule,
        ButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
