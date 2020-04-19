import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule
} from '@nebular/theme';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuOrganizationComponent } from './menu/menu-organization/menu-organization.component';
import {DxButtonModule, DxFormModule, DxPopupModule} from 'devextreme-angular';
import {CommonModule} from '@angular/common';
import { MainLayoutComponent } from './@core/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './@core/layouts/auth-layout/auth-layout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuOrganizationComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent
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
    NbActionsModule,
  ],
  providers: [
    NbSidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
