import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HouseConvertById} from './houseConvertById';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houseListDetail: HouseConvertById[] = [];
  private readonly API_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  public addHouse(house: DataCreatedHouse): Observable<DataCreatedHouse> {
    return this.httpClient.post<DataCreatedHouse>(this.API_URL + 'host/houses', house);
  }

  public getListCategory(): Observable<CategoryHouse> {
    return this.httpClient.get<CategoryHouse>(this.API_URL + 'category-list');
  }
}
