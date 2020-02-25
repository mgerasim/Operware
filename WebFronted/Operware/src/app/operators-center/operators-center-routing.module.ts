import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigurationLayoutComponent} from '../configuration-center/configuration-layout/configuration-layout.component';
import {ConfigurationComponent} from '../configuration-center/configuration/configuration.component';
import {OperatorsLayoutComponent} from './operators-layout/operators-layout.component';
import {CallsComponent} from './calls/calls.component';


const routes: Routes = [
  {
    path: '', component: OperatorsLayoutComponent, children: [
      {
        path: '', component: CallsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsCenterRoutingModule { }
