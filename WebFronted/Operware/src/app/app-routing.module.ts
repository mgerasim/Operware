import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CallbacksComponent} from './operators-center/callbacks/callbacks.component';


const routes: Routes = [
  {
    path: 'configuration',
    loadChildren: () => import('./configuration-center/configuration-center.module').then(m => m.ConfigurationCenterModule)
  },
  {
    path: 'calls',
    loadChildren: () => import('./operators-center/operators-center.module').then(m => m.OperatorsCenterModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./service-center/service-center.module').then(m => m.ServiceCenterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
