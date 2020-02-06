import {Component, OnInit} from '@angular/core';
import {IHouseDetail} from '../../../interface/house/houseDetail';
import {HouseService} from '../../../service/house/house.service';

@Component({
  selector: 'app-public-house-list',
  templateUrl: './public-house-list.component.html',
  styleUrls: ['./public-house-list.component.css']
})
export class PublicHouseListComponent implements OnInit {
  houseList: IHouseDetail[];
  content: string;
  page = 1;
  pageTotal: number;

  constructor(private houseService: HouseService) {
  }

  ngOnInit() {
    this.getHouseList();
  }

  changePage(page) {
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

  private getHouseList() {
    this.houseService.getHouseList().subscribe(result => {
      this.houseList = result;
      this.pageTotal = Math.ceil(+this.houseList.length / 4);
      console.log('>>>>>houseList of host ' + JSON.stringify(this.houseList));
    }, err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }
}
