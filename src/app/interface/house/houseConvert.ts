export class HouseConvert {
  constructor(id: number, name: string, picture: string[], address: string, price: string) {
    this._id = id;
    this._name = name;
    this._picture = picture;
    this._address = address;
    this._price = price;
  }

  // tslint:disable-next-line:variable-name
  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

// tslint:disable-next-line:variable-name
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  // tslint:disable-next-line:variable-name

  // tslint:disable-next-line:variable-name
  private _address: string;

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  // tslint:disable-next-line:variable-name
  private _picture: string[];

  get picture(): string[] {
    return this._picture;
  }

  set picture(value: string[]) {
    this._picture = value;
  }

  // tslint:disable-next-line:variable-name
  private _price: string;

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }
}

