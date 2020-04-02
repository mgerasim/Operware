import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsCenterRoutingModule } from './operators-center-routing.module';
import { CallsComponent } from './calls/calls.component';
import { OperatorsLayoutComponent } from './operators-layout/operators-layout.component';
import {DxButtonModule, DxDataGridModule, DxFormModule, DxPopupModule, DxTextBoxModule} from 'devextreme-angular';
import { EventsComponent } from './calls/events/events.component';
import { VariablesComponent } from './calls/variables/variables.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import {NbCardModule} from '@nebular/theme';
import { CallbackFormComponent } from './callbacks/callback-form/callback-form.component';


@NgModule({
  declarations: [CallsComponent, OperatorsLayoutComponent, EventsComponent, VariablesComponent, CallbacksComponent, CallbackFormComponent],
  imports: [
    CommonModule,
    OperatorsCenterRoutingModule,
    DxDataGridModule,
    DxTextBoxModule,
    NbCardModule,
    DxButtonModule,
    DxPopupModule,
    DxFormModule
  ]
})
export class OperatorsCenterModule { }
