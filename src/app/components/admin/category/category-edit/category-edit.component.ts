import {Component, OnInit} from '@angular/core';
import {ICategory} from '../iCategory';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../../service/category-house/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: ICategory;
  categoryForm: FormGroup;
  file: File;
  message = false;

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCategoryBy(id);
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const {value} = this.categoryForm;
      const data = {
        ...this.category,
        ...value
      };
      this.categoryService.editCategory(data).subscribe(next => {
          this.message = true;
          this.ngOnInit();
        },
        error => console.log(error)
      );
    }
  }

  getCategoryBy(id: number) {
    this.categoryService.getCategory(id).subscribe(result => {
      this.category = result;
      this.categoryForm.patchValue(this.category);
      console.log('success');
    }, error => {
      console.log('error');
    });
  }
}
