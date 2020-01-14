import {DataCreatedHouse} from './dataCreatedHouse';

export class CreateHouse {
  // tslint:disable-next-line:variable-name
  private _data: Array<DataCreatedHouse>;

  get data(): Array<DataCreatedHouse> {
    return this._data;
  }

  set data(value: Array<DataCreatedHouse>) {
    this._data = value;
  }
}
