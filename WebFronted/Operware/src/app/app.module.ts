import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NbCardModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbSidebarService, NbThemeModule} from '@nebular/theme';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuOrganizationComponent } from './menu/menu-organization/menu-organization.component';
import {DxButtonModule, DxFormModule, DxPopupModule} from 'devextreme-angular';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuOrganizationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    AppRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NgbModule,
    NbMenuModule.forRoot(),
    DxPopupModule,
    NbCardModule,
    DxFormModule,
    DxButtonModule,
  ],
  providers: [
    NbSidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
