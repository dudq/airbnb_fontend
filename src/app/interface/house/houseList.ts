import {HouseConvert} from './houseConvert';


export class HouseList {
  private _data: Array<HouseConvert>;
  get data(): Array<HouseConvert> {
    return this._data;
  }

  set data(value: Array<HouseConvert>) {
    this._data = value;
  }
}
