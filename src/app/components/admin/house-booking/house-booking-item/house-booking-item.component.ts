import {Component, Input, OnInit} from '@angular/core';
import {IHouseBooking} from '../../../../interface/housebooking';
import {Info} from '../../../../interface/info';
import {HouseBookingService} from '../../../../service/order-house/housebooking.service';

@Component({
  selector: 'app-house-booking-item',
  templateUrl: './house-booking-item.component.html',
  styleUrls: ['./house-booking-item.component.css']
})
export class HouseBookingItemComponent implements OnInit {
  @Input() houseBookedList: IHouseBooking[];
  @Input() currentUser: Info;
  message: string;
  isCancel: boolean;
  // @Output() checkIn = new EventEmitter();
  // @Output() checkOut = new EventEmitter();
  // @Output() cancelHouseBooking = new EventEmitter();
  constructor(private houseBookingService: HouseBookingService) {
  }

  ngOnInit() {
  }

  checkIn(id: number) {
    this.houseBookingService.checkIn(id).subscribe(
      result => {
        this.message = result.message;
        this.ngOnInit();
      }
    );
  }

  checkOut(id: number) {
    this.houseBookingService.checkOut(id).subscribe(
      result => {
        this.message = result.message;
        this.ngOnInit();
      }
    );
  }

  cancelHouseBooking(id: number) {
    this.houseBookingService.cancel(id).subscribe(
      result => {
        this.isCancel = result.success;
        this.message = result.message;
        alert(result.message);
        this.ngOnInit();
      }
    );
  }
}
