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
