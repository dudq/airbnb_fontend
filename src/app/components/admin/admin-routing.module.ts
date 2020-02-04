import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {HouseListComponent} from './house/house-list/house-list.component';
import {HouseCreateComponent} from './house/house-create/house-create.component';
import {HouseDetailComponent} from './house/house-detail/house-detail.component';
import {HouseEditComponent} from './house/house-edit/house-edit.component';
import {HouseBookingCreateComponent} from './house-booking/house-booking-create/house-booking-create.component';
import {HouseBookingListComponent} from './house-booking/house-booking-list/house-booking-list.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/house-list',
        pathMatch: 'full'
      },
      {
        path: 'house-list',
        component: HouseListComponent
      },
      {
        path: 'house-create',
        component: HouseCreateComponent
      },
      {
        path: 'house-detail/:id',
        component: HouseDetailComponent
      },
      {
        path: 'house-edit/:id',
        component: HouseEditComponent
      },
      {
        path: 'house-booking-create/:id',
        component: HouseBookingCreateComponent
      },
      {
        path: 'house-booking-list',
        component: HouseBookingListComponent
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
