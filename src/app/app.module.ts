import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/user/register-user/register.component';
import {HttpClientModule} from '@angular/common/http';
// @ts-ignore
import {RegisterHostComponent} from './components/host/register-host/register-host.component';
import {LoginComponent} from './components/login/login.component';
import {AddHouseComponent} from './components/host/add-house/add-house.component';
import {ListHouseOfHostComponent} from './components/host/list-house-of-host/list-house-of-host.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    RegisterHostComponent,
    LoginComponent,
    AddHouseComponent,
    ListHouseOfHostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
