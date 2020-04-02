import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigurationLayoutComponent} from './configuration-layout/configuration-layout.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {ConfigurationVariableComponent} from './configuration-variable/configuration-variable.component';
import {ConfigurationCallbackComponent} from './configuration-callback/configuration-callback.component';
import {ConfigurationEventBindingComponent} from './configuration-event-binding/configuration-event-binding.component';


const routes: Routes = [
  {
    path: '', component: ConfigurationLayoutComponent, children: [
      {
        path: '', component: ConfigurationComponent
      },
      {
        path: 'variables', component: ConfigurationVariableComponent
      },
      {
        path: 'callback', component: ConfigurationCallbackComponent
      },
      {
        path: 'event-binding', component: ConfigurationEventBindingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationCenterRoutingModule { }
