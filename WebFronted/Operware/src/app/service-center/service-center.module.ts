import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceCenterRoutingModule } from './service-center-routing.module';
import { ServiceComponent } from './service/service.component';
import {DxButtonModule} from 'devextreme-angular';


@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    ServiceCenterRoutingModule,
    DxButtonModule
  ]
})
export class ServiceCenterModule { }
