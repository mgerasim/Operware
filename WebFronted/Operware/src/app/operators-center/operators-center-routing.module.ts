import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OperatorsLayoutComponent} from './operators-layout/operators-layout.component';
import {CallsComponent} from './calls/calls.component';
import {EventsComponent} from './calls/events/events.component';
import {CallbacksComponent} from './callbacks/callbacks.component';


const routes: Routes = [
  {
    path: '', component: OperatorsLayoutComponent, children: [
      {
        path: '', component: CallsComponent
      },
      {
        path: ':pbxCallId/events',  component: EventsComponent
      },
      {
        path: 'events', component: EventsComponent
      },
      {
        path: 'callbacks', component: CallbacksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsCenterRoutingModule { }
