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

  public getHouseList(): Observable<ResponseMessage> {
    return this.httpClient.get<ResponseMessage>(this.API_URL);
  }

  public getHouseId(id: string): Observable<ResponseMessage> {
    return this.httpClient.get<ResponseMessage>(this.API_URL + '/host/' + id);
  }

  public getHouseUser(id: string): Observable<ResponseMessage> {
    return this.httpClient.get<ResponseMessage>(this.API_URL + '/user/' + id);
  }

  public addHouse(houseBooking: IHouseBooking): Observable<ResponseMessage> {
    return this.httpClient.post<ResponseMessage>(this.API_URL, houseBooking);
  }

  public checkIn(id: number): Observable<ResponseMessage> {
    return this.httpClient.put<ResponseMessage>(this.API_URL + '/checkin/' + id, null);
  }

  public checkOut(id: number): Observable<ResponseMessage> {
    return this.httpClient.put<ResponseMessage>(this.API_URL + '/checkout/' + id, null);
  }

  public cancel(id: number): Observable<ResponseMessage> {
    return this.httpClient.put<ResponseMessage>(this.API_URL + '/cancel/' + id, null);
  }
}
