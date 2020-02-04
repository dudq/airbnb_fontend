import {User} from './user';
import {IHouseDetail} from './house/houseDetail';

export interface IHouseBooking {
  id: number;
  dateCheckOut: Date;
  dateCheckIn: Date;
  guest: number;
  status: string;
  house: IHouseDetail;
  user: User;
}
