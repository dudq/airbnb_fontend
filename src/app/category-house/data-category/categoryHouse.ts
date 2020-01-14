import {DataCategoryHouse} from './dataCategoryHouse';

export class CategoryHouse {
  // tslint:disable-next-line:variable-name
  private _data: Array<DataCategoryHouse>;


  get data(): Array<DataCategoryHouse> {
    return this._data;
  }

  set data(value: Array<DataCategoryHouse>) {
    this._data = value;
  }
}
