import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationCenterRoutingModule } from './configuration-center-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ConfigurationLayoutComponent } from './configuration-layout/configuration-layout.component';
import {DxButtonModule, DxDataGridModule, DxFormModule, DxLoadPanelModule, DxPopupModule, DxScrollViewModule} from 'devextreme-angular';
import { ConfigurationVariableComponent } from './configuration-variable/configuration-variable.component';
import {NbCardModule} from '@nebular/theme';
import { ConfigurationVariableFormComponent } from './configuration-variable/configuration-variable-form/configuration-variable-form.component';
import { ConfigurationCallbackComponent } from './configuration-callback/configuration-callback.component';
import { ConfigurationEventBindingComponent } from './configuration-event-binding/configuration-event-binding.component';


@NgModule({
  declarations: [ConfigurationComponent, ConfigurationLayoutComponent, ConfigurationVariableComponent, ConfigurationVariableFormComponent, ConfigurationCallbackComponent, ConfigurationEventBindingComponent],
  imports: [
    CommonModule,
    ConfigurationCenterRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxLoadPanelModule,
    DxDataGridModule,
    NbCardModule,
    DxPopupModule,
    DxScrollViewModule
  ]
})
export class ConfigurationCenterModule { }
