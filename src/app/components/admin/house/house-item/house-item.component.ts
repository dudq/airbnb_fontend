import {Component, Input, OnInit} from '@angular/core';
import {IHouseDetail} from '../../../../interface/house/houseDetail';

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.css']
})
export class HouseItemComponent implements OnInit {
  @Input() houseList: IHouseDetail[];
  page = 1;
  pageTotal: number;

  constructor() {
  }

  ngOnInit() {
  }

  changePage(page) {
    this.pageTotal = this.houseList.length;
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
}
