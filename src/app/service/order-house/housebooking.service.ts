import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHouseBooking} from '../../interface/housebooking';
import {ResponseMessage} from '../../interface/ResponseMessage';

@Injectable({
  providedIn: 'root'
})
export class HouseBookingService {
  private readonly API_URL = 'http://localhost:8080/api/order-houses';

  constructor(private httpClient: HttpClient) {
  }

  public getHouseList(): Observable<IHouseBooking[]> {
    return this.httpClient.get<IHouseBooking[]>(this.API_URL);
  }

  public getHouseId(id: number): Observable<IHouseBooking> {
    return this.httpClient.get<IHouseBooking>(this.API_URL + id);
  }


  public addHouse(houseBooking: IHouseBooking): Observable<ResponseMessage> {
    return this.httpClient.post<ResponseMessage>(this.API_URL, houseBooking);
  }
}
