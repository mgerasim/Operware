import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OperatorsLayoutComponent} from '../operators-center/operators-layout/operators-layout.component';
import {ServiceComponent} from './service/service.component';
import {MainLayoutComponent} from '../@core/layouts/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', component: ServiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceCenterRoutingModule { }
