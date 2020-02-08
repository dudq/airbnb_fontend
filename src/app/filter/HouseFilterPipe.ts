import {Pipe, PipeTransform} from '@angular/core';
import {IHouseDetail} from '../interface/house/houseDetail';

@Pipe({
  name: 'houseDetailFilter'
})

export class HouseFilterPipe implements PipeTransform {
  transform(houseDetails: IHouseDetail[], searchName: string, searchMinArea: number, searchBedRoom: number, searchCategory: string): IHouseDetail[] {
    if (!houseDetails || (!searchName && !searchMinArea && !searchBedRoom && !searchCategory)) {
      return houseDetails;
    }
    return houseDetails.filter(houseDetail => {
      if (searchName && houseDetail.houseName.toLocaleLowerCase().indexOf(searchName.toLocaleLowerCase()) === -1) {
        return false;
      }

      if (searchMinArea && searchMinArea > houseDetail.area) {
        return false;
      }

      if (searchBedRoom && searchBedRoom > houseDetail.bedroomNumber) {
        return false;
      }

      if (searchCategory && houseDetail.category.name.toLocaleLowerCase().indexOf(searchCategory.toLocaleLowerCase()) === -1) {
        return false;
      }

      return true;
    });
  }
}
