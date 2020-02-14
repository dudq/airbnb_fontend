import {Component, OnInit} from '@angular/core';
import {IHouseDetail} from '../../../../interface/house/houseDetail';
import {HouseService} from '../../../../service/house/house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Status} from '../../../../interface/Status';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: IHouseDetail;
  typeOfStatus = Status;
  id: number;
  constructor(
    private houseService: HouseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
    console.log('>>>' + id);
    this.houseService.getHouseId(id).subscribe(
      result => {
        this.house = result;
        console.log('>>>' + JSON.stringify(result));
      }, error => {
        console.log('>>>' + error);
        this.house = null;
      }
    );
  }

}
