import {Component, Input, OnInit} from '@angular/core';
import {IHouseDetail} from '../../../interface/house/houseDetail';

@Component({
  selector: 'app-public-house-item',
  templateUrl: './public-house-item.component.html',
  styleUrls: ['./public-house-item.component.css']
})
export class PublicHouseItemComponent implements OnInit {
  @Input() house: IHouseDetail;

  constructor() {
  }

  ngOnInit() {
  }

}
