import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsCenterRoutingModule } from './operators-center-routing.module';
import { CallsComponent } from './calls/calls.component';
import { OperatorsLayoutComponent } from './operators-layout/operators-layout.component';
import {DxDataGridModule} from 'devextreme-angular';


@NgModule({
  declarations: [CallsComponent, OperatorsLayoutComponent],
  imports: [
    CommonModule,
    OperatorsCenterRoutingModule,
    DxDataGridModule
  ]
})
export class OperatorsCenterModule { }
