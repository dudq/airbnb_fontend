import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminRoutingModule} from './admin-routing.module';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {NgModule} from '@angular/core';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {HouseListComponent} from './house/house-list/house-list.component';
import {HouseCreateComponent} from './house/house-create/house-create.component';
import {HouseDetailComponent} from './house/house-detail/house-detail.component';
import {HouseEditComponent} from './house/house-edit/house-edit.component';
import {HouseBookingCreateComponent} from './house-booking/house-booking-create/house-booking-create.component';
import {HouseBookingListComponent} from './house-booking/house-booking-list/house-booking-list.component';
import {HouseBookingItemComponent} from './house-booking/house-booking-item/house-booking-item.component';
import {HouseItemComponent} from './house/house-item/house-item.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    LeftMenuComponent,
    CategoryCreateComponent,
    CategoryListComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    HouseListComponent,
    HouseCreateComponent,
    HouseDetailComponent,
    HouseEditComponent,
    HouseBookingCreateComponent,
    HouseBookingListComponent,
    HouseBookingItemComponent,
    HouseItemComponent,
  ],
  exports: [
    HouseDetailComponent,
    HouseCreateComponent,
    HouseItemComponent,
    HouseBookingItemComponent
  ]
})
export class AdminModule {

}
