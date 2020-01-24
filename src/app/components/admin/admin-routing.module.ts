import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
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
