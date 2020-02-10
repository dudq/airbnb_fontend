import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() loadData = new EventEmitter();
  page = 1;
  pageTotal: number;

  constructor(private houseBookingService: HouseBookingService) {
  }

  ngOnInit() {
  }

  checkIn(id: number) {
    this.houseBookingService.checkIn(id).subscribe(
      result => {
        this.message = result.message;
        this.loadData.emit();
      }
    );
  }

  checkOut(id: number) {
    this.houseBookingService.checkOut(id).subscribe(
      result => {
        this.message = result.message;
        this.loadData.emit();
      }
    );
  }

  changePage(page) {
    this.pageTotal = this.houseBookedList.length;
    switch (page) {
      case 'previous':
        if (this.page > 1) {
          this.page = this.page - 1;
        }
        break;
      case 'next':
        if (this.page < this.pageTotal) {
          this.page = this.page + 1;
        }
        break;
    }
  }

  cancelHouseBooking(id: number) {
    this.houseBookingService.cancel(id).subscribe(
      result => {
        this.isCancel = result.success;
        this.message = result.message;
        alert(result.message);
        this.loadData.emit();
      }
    );
  }
}
