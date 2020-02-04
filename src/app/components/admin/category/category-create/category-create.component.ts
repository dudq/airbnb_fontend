import {Component, OnInit} from '@angular/core';
import {ICategory} from '../iCategory';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CategoryService} from '../../../../service/category-house/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup;
  category: ICategory;
  message = false;

  constructor(private categoryService: CategoryService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const {value} = this.categoryForm;
      this.category = value;
      this.categoryService.createCategory(this.category).subscribe(
        next => {
          console.log(next);
          this.message = true;
          this.ngOnInit();
        }
      );
    } else {
      console.log('error');
    }
  }
}
