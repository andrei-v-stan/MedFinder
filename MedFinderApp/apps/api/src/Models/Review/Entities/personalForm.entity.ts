import { IReview } from '../Interfaces/review.interface';
import { PersonalFormField } from './personalFormField.entity';

export class PersonalForm implements IReview {
  private _createDate: Date;
  private _lastEditDate: Date;
  private _title: string;
  private _rating: number;
  private _fields: PersonalFormField[];

  constructor(title: string, rating: number, fields: PersonalFormField[]) {
    this._title = title;
    this._rating = rating;
    this._fields = fields;
  }

  public get createDate(): Date {
    return this._createDate;
  }
  public set createDate(value: Date) {
    this._createDate = value;
  }

  public get lastEditDate(): Date {
    return this._lastEditDate;
  }
  public set lastEditDate(value: Date) {
    this._lastEditDate = value;
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get rating(): number {
    return this._rating;
  }
  public set rating(value: number) {
    if (value < 1 || value > 10) {
      throw new RangeError('Rating must be between 1 and 10');
    }
    this._rating = value;
  }

  public get fields(): PersonalFormField[] {
    return this._fields;
  }
  public set fields(value: PersonalFormField[]) {
    this._fields = value;
  }
  public addField(field: PersonalFormField) {
    this.fields.push(field);
  }
  public updateField(field: PersonalFormField) {
    const index = this.fields.indexOf(field);
    if (index > -1) {
      this.fields[index] = field;
    }
  }
  public removeField(field: PersonalFormField) {
    const index = this.fields.indexOf(field);
    if (index > -1) {
      this.fields.splice(index, 1);
    }
  }
}
