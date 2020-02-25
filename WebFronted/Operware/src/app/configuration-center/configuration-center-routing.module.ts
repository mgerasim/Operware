import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigurationLayoutComponent} from './configuration-layout/configuration-layout.component';
import {ConfigurationComponent} from './configuration/configuration.component';


const routes: Routes = [
  {
    path: '', component: ConfigurationLayoutComponent, children: [
      {
        path: '', component: ConfigurationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationCenterRoutingModule { }
