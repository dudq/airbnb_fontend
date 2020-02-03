import {Component, OnInit} from '@angular/core';
import {HouseBookingService} from '../../../../service/order-house/housebooking.service';
import {IHouseBooking} from '../../../../interface/housebooking';

@Component({
  selector: 'app-house-booking-list',
  templateUrl: './house-booking-list.component.html',
  styleUrls: ['./house-booking-list.component.css']
})
export class HouseBookingListComponent implements OnInit {
  houseBookedList: IHouseBooking[];
  message: string;
  isSuccess: boolean;

  constructor(private houseBookingService: HouseBookingService) {
  }

  ngOnInit() {
    this.houseBookingService.getHouseList().subscribe(
      result => {
        this.isSuccess = result.success;
        this.message = result.message;
        if (result.success) {
          this.houseBookedList = result.data;
        }
      }, error => {
        this.isSuccess = false;
        this.message = 'Something error ?';
      }
    );
  }

}
