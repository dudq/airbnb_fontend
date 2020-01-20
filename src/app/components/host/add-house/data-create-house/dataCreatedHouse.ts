export class DataCreatedHouse {
  constructor(houseName: string, category: number, picture: string[], address: string, bedroomNumber: string, bathroomNumber: string, description: string, price: string, area: string, user: string) {
    this._houseName = houseName;
    this._category = category;
    this._picture = picture;
    this._address = address;
    this._bedroomNumber = bedroomNumber;
    this._bathroomNumber = bathroomNumber;
    this._description = description;
    this._price = price;
    this._area = area;
    this._user = user;
  }

// tslint:disable-next-line:variable-name
  private _houseName: string;

  get houseName(): string {
    return this._houseName;
  }

  set houseName(value: string) {
    this._houseName = value;
  }

  // tslint:disable-next-line:variable-name
  private _category: number;

  get category(): number {
    return this._category;
  }

  set category(value: number) {
    this._category = value;
  }

  // tslint:disable-next-line:variable-name
  private _picture: string[];

  get picture(): string[] {
    return this._picture;
  }

  set picture(value: string[]) {
    this._picture = value;
  }

  private _address: string;

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  // tslint:disable-next-line:variable-name
  private _bedroomNumber: string;

  get bedroomNumber(): string {
    return this._bedroomNumber;
  }

  set bedroomNumber(value: string) {
    this._bedroomNumber = value;
  }

  // tslint:disable-next-line:variable-name
  private _bathroomNumber: string;

  get bathroomNumber(): string {
    return this._bathroomNumber;
  }

  set bathroomNumber(value: string) {
    this._bathroomNumber = value;
  }

  // tslint:disable-next-line:variable-name
  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  // tslint:disable-next-line:variable-name
  private _price: string;

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }

  // tslint:disable-next-line:variable-name
  private _area: string;

  get area(): string {
    return this._area;
  }

  set area(value: string) {
    this._area = value;
  }

  // tslint:disable-next-line:variable-name
  private _user: string;

  get user(): string {
    return this._user;
  }

  set user(value: string) {
    this._user = value;
  }
}
