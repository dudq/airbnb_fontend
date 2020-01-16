import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/user/register-user/register.component';
import {RegisterHostComponent} from './components/host/register-host/register-host.component';
import {LoginComponent} from './components/login/login.component';
import {AddHouseComponent} from './components/host/add-house/add-house.component';
import {ListHouseOfHostComponent} from './components/host/list-house-of-host/list-house-of-host.component';
import {HomeListForGuestComponent} from './components/user/home-list-for-guest/home-list-for-guest.component';
import {CategoryCreateComponent} from './components/category/category-create/category-create.component';
import {CategoryListComponent} from './components/category/category-list/category-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register-host',
    component: RegisterHostComponent
  },
  {
    path: 'add-house',
    component: AddHouseComponent
  },
  {
    path: 'host/list-house-of-host',
    component: ListHouseOfHostComponent
  },
  {
    path: 'user/home-list-for-guest',
    component: HomeListForGuestComponent
  },
  {
    path: 'category-list',
    component: CategoryListComponent
  },
  {
    path: 'category-create',
    component: CategoryCreateComponent
  },
  // {
  //   path: 'category-edit/:id',
  //   component: CategoryEditComponent
  // },
  // {
  //   path: 'category-delete/:id',
  //   component: CategoryDeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
