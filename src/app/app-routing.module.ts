import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './components/public/home/home.component';
import {RegisterComponent} from './components/user/register-user/register.component';
import {RegisterHostComponent} from './components/host/register-host/register-host.component';
import {LoginComponent} from './components/public/login/login.component';
import {AddHouseComponent} from './components/host/add-house/add-house.component';
import {ListHouseOfHostComponent} from './components/host/list-house-of-host/list-house-of-host.component';
import {HomeListForGuestComponent} from './components/user/home-list-for-guest/home-list-for-guest.component';
import {CategoryCreateComponent} from './components/admin/category/category-create/category-create.component';
import {CategoryListComponent} from './components/admin/category/category-list/category-list.component';
import {CategoryEditComponent} from './components/admin/category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './components/admin/category/category-delete/category-delete.component';
import {AdminComponent} from './components/admin/admin/admin.component';
import {EditHouseComponent} from './components/host/edit-house/edit-house.component';
import {AboutComponent} from './components/public/about/about.component';
import {ContactComponent} from './components/public/contact/contact.component';
import {AdminGuardService} from './auth/guard/AdminGuardService';
import {PublicHouseListComponent} from './components/public/public-house-list/public-house-list.component';
import {HouseDetailComponent} from './components/admin/house/house-detail/house-detail.component';
// import {PathResolveService} from './service/page404/path-resolve.service';
import {Page404Component} from './page404/page404.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuardService]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
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
    path: 'houses',
    component: PublicHouseListComponent
  },
  {
    path: 'houses-detail/:id',
    component: HouseDetailComponent
  },
  {
    path: 'add-house',
    component: AddHouseComponent
  },
  {
    path: 'edit-house/:id',
    component: EditHouseComponent
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
  {
    path: 'category-edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'category-delete/:id',
    component: CategoryDeleteComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  // page404
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: paths.home
  // },
  // {
  //   path: paths.home,
  //   component: HomeComponent
  // },
  {
    path: '**',
    // resolve: {
    //   path: PathResolveService
    // },
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
