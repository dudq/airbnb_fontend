import {Pipe, PipeTransform} from '@angular/core';
import {IHouseDetail} from '../interface/house/houseDetail';

@Pipe({
  name: 'houseDetailFilter'
})

export class HouseFilterPipe implements PipeTransform {
  transform(houseDetails: IHouseDetail[], searchName: string): IHouseDetail[] {
    if (!houseDetails || !searchName) {
      return houseDetails;
    }
    return houseDetails.filter(houseDetail =>
      houseDetail.houseName.toLocaleLowerCase().indexOf(searchName.toLocaleLowerCase()) !== -1);
  }
}
