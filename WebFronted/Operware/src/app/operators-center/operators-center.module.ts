import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsCenterRoutingModule } from './operators-center-routing.module';
import { CallsComponent } from './calls/calls.component';
import { OperatorsLayoutComponent } from './operators-layout/operators-layout.component';
import {DxDataGridModule, DxTextBoxModule} from 'devextreme-angular';
import { EventsComponent } from './calls/events/events.component';


@NgModule({
  declarations: [CallsComponent, OperatorsLayoutComponent, EventsComponent],
  imports: [
    CommonModule,
    OperatorsCenterRoutingModule,
    DxDataGridModule,
    DxTextBoxModule
  ]
})
export class OperatorsCenterModule { }
