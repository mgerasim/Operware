import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CallbacksComponent} from './operators-center/callbacks/callbacks.component';
import {AuthGuard} from './@core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./configuration-center/configuration-center.module').then(m => m.ConfigurationCenterModule)
  },
  {
    path: 'configuration',
    canActivate: [AuthGuard],
    loadChildren: () => import('./configuration-center/configuration-center.module').then(m => m.ConfigurationCenterModule)
  },
  {
    path: 'calls',
    canActivate: [AuthGuard],
    loadChildren: () => import('./operators-center/operators-center.module').then(m => m.OperatorsCenterModule)
  },
  {
    path: 'service',
    canActivate: [AuthGuard],
    loadChildren: () => import('./service-center/service-center.module').then(m => m.ServiceCenterModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
