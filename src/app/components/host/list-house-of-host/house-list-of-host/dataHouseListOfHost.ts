export class DataHouseListOfHost {
  constructor(id: number, name: string, categoryName: string, address: string, price: string) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._categoryName = categoryName;
    this._price = price;
    // this._status = status;
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _address: string;

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  private _categoryName: string;

  get categoryName(): string {
    return this._categoryName;
  }

  set categoryName(value: string) {
    this._categoryName = value;
  }

  private _price: string;

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }

  // private _status: any;
  //
  // get status(): any {
  //   return this._status;
  // }
  //
  // set status(value: any) {
  //   this._status = value;
  // }
}
