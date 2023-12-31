import { Medicine } from 'src/Models/Medicine/Entities/medicine.entity';
import { IReview } from '../Interfaces/review.interface';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TABLE_NAMES } from 'src/Utils/constants';

//@Entity({name:TABLE_NAMES.REVIEW})
export class TextReview implements IReview {
  @PrimaryGeneratedColumn()
  id: number;
  private _createDate: Date;
  private _lastEditDate: Date;
  private _title: string;
  private _content: string;
  private _score: number;
 // @ManyToOne(()=> Medicine, medicine=> medicine.reviews)
  private _medicine: Medicine;

  constructor(title: string, content: string) {
    this._title = title;
    this._content = content;
    this._score = 0;
    this._createDate = new Date();
    this._lastEditDate = new Date();
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

  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
    this.lastEditDate = new Date();
  }

  public get score(): number {
    return this._score;
  }
  private set score(value: number) {}
  
  public get medicine(): Medicine{
    return this._medicine;
  }

  public set medicine(value: Medicine){
    this._medicine= value;
  }
  public upVote() {
    this._score += 1;
  }

  public downVote() {
    this._score -= 1;
  }
}
