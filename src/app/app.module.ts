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
import {RegisterHostComponent} from './components/host/register-host/register-host.component';
import {LoginComponent} from './components/login/login.component';
import {AddHouseComponent} from './components/host/add-house/add-house.component';
import {ListHouseOfHostComponent} from './components/host/list-house-of-host/list-house-of-host.component';
import {HomeListForGuestComponent} from './components/user/home-list-for-guest/home-list-for-guest.component';
import {OrderModule} from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {CategoryCreateComponent} from './components/admin/category/category-create/category-create.component';
import {CategoryListComponent} from './components/admin/category/category-list/category-list.component';
import {CategoryEditComponent} from './components/admin/category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './components/admin/category/category-delete/category-delete.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AdminComponent} from './components/admin/admin/admin.component';
import {LeftMenuComponent} from './components/admin/left-menu/left-menu.component';
import {EditHouseComponent} from './components/host/edit-house/edit-house.component';

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
    ListHouseOfHostComponent,
    HomeListForGuestComponent,
    CategoryCreateComponent,
    CategoryListComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    AdminComponent,
    LeftMenuComponent,
    EditHouseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ConfirmationPopoverModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
