import {HouseConvert} from './houseConvert';


export class HouseList {
  // success: boolean;
  // message: string;
  // tslint:disable-next-line:variable-name
  // private _dataHouseDetails: Array<DataHouseDetails>;
  // tslint:disable-next-line:variable-name
  private _data: Array<HouseConvert>;

  // get dataHouseDetail(): Array<DataHouseDetails> {
  //   return this._dataHouseDetails;
  // }
  //
  // set dataHouseDetail(value: Array<DataHouseDetails>) {
  //   this._dataHouseDetails = value;
  // }


  // tslint:disable-next-line:variable-name

  get data(): Array<HouseConvert> {
    return this._data;
  }

  set data(value: Array<HouseConvert>) {
    this._data = value;
  }
}
