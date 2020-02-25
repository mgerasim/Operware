import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationCenterRoutingModule } from './configuration-center-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ConfigurationLayoutComponent } from './configuration-layout/configuration-layout.component';
import {DxButtonModule, DxFormModule, DxLoadPanelModule} from 'devextreme-angular';


@NgModule({
  declarations: [ConfigurationComponent, ConfigurationLayoutComponent],
  imports: [
    CommonModule,
    ConfigurationCenterRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxLoadPanelModule
  ]
})
export class ConfigurationCenterModule { }
