import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../../service/house/house.service';
import {IHouseDetail} from '../../../../interface/house/houseDetail';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  houseList: IHouseDetail[];
  content: string;

  constructor(private houseService: HouseService) {
  }

  ngOnInit() {
    this.getHouseList();
  }

  private getHouseList() {
    this.houseService.getHouseList().subscribe(result => {
      this.houseList = result;
      console.log('>>>>>houseList of host ' + JSON.stringify(this.houseList));
    }, err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }

}
