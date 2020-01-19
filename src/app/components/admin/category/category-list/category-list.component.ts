import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../service/category-house/category.service';
import {ICategory} from '../iCategory';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList: ICategory[] = [];
  content: string;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(next => (this.categoryList = next),
      error => (this.content = this.content = JSON.parse(error.error).message));
  }

}
