import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NbLayoutModule, NbMenuModule, NbSidebarModule, NbSidebarService, NbThemeModule} from '@nebular/theme';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    AppRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule.forRoot(),
  ],
  providers: [
    NbSidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
