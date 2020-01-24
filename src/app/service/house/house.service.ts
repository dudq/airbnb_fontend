import {Injectable} from '@angular/core';
import {HouseConvertById} from '../../interface/house/houseConvertById';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataCreatedHouse} from '../../components/host/add-house/data-create-house/dataCreatedHouse';
import {CategoryHouse2} from '../../interface/category-house';
import {DataHouseListOfHost} from '../../components/host/list-house-of-host/house-list-of-host/dataHouseListOfHost';
import {IHouseDetail} from '../../interface/house/houseDetail';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houseListDetail: HouseConvertById[] = [];
  private readonly API_URL = 'http://localhost:8080/api/';


  constructor(private httpClient: HttpClient) {
  }

  // public convertHouseList(): HouseConvert[] {
  //   let houseList: HouseConvert[] = [];
  //   let array: DataHouseList[] = [];
  //   this.getList().subscribe(result => {
  //     array = result.data;
  //     // tslint:disable-next-line:prefer-for-of
  //     for (let i = 0; i < array.length; i++) {
  //       const arrayPicture = array[i].picture.split(' ');
  //       const house = new HouseConvert(array[i].id, array[i].name, arrayPicture, array[i].address, array[i].price);
  //
  //       houseList.push(house);
  //       console.log('>>>> ' + houseList);
  //     }
  //   });
  //   return houseList;
  // }

  public getList(): Observable<IHouseDetail[]> {
    return this.httpClient.get<IHouseDetail[]>(this.API_URL + 'houses');
  }

  public getHouseId(id: number): Observable<IHouseDetail> {
    return this.httpClient.get<IHouseDetail>(this.API_URL + 'houses/' + id);
  }


  public addHouse(house: DataCreatedHouse): Observable<DataCreatedHouse> {
    return this.httpClient.post<DataCreatedHouse>(this.API_URL + 'houses', house);
  }

  public editHouse(house): Observable<any> {
    return this.httpClient.put<DataCreatedHouse>(this.API_URL + '/houses/' + house.id, house);
  }

  public getListHouseOfHost(id: number): Observable<DataHouseListOfHost []> {
    return this.httpClient.get<DataHouseListOfHost []>(this.API_URL + 'houses/host/' + id);
  }

  public getListCategory(): Observable<CategoryHouse2> {
    return this.httpClient.get<CategoryHouse2>(this.API_URL + 'category-list');
  }
}
