import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICategory} from '../../category/iCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly API_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  public getListCategory(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.API_URL);
  }

  // public getCategoryHouseId(id: number): Observable<CategoryHouse>

  createCategory(category: ICategory): Observable<any> {
    console.log(category);
    return this.httpClient.post(this.API_URL, category);
  }

}
