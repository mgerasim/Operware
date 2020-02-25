import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const routes: Routes = [
  {
    path: 'configuration',
    loadChildren: () => import('./configuration-center/configuration-center.module').then(m => m.ConfigurationCenterModule)
  },
  {
    path: 'calls',
    loadChildren: () => import('./operators-center/operators-center.module').then(m => m.OperatorsCenterModule)
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
