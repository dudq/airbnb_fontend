import {DataHouseDetails} from './dataHouseDetails';

export class HouseDetails {
  // tslint:disable-next-line:variable-name
  private _data: DataHouseDetails;

  get data(): DataHouseDetails {
    return this._data;
  }

  set data(value: DataHouseDetails) {
    this._data = value;
  }
}
