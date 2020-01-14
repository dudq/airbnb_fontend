export class DataCategoryHouse {
  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
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
}
