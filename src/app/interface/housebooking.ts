import {User} from './user';
import {IHouseDetail} from './house/houseDetail';

export interface IHouseBooking {
  id: number;
  dateCheckOut: string;
  dateCheckIn: string;
  guest: number;
  house: IHouseDetail;
  user: User;
}
