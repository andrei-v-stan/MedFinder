import { Medicine } from 'src/Models/Medicine/Entities/medicine.entity';
import { IReview } from '../Interfaces/review.interface';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TABLE_NAMES } from 'src/Utils/constants';
import { User } from 'src/Models/users/users.service';

@Entity({name:TABLE_NAMES.REVIEW})
export class Review implements IReview {
  @PrimaryGeneratedColumn()
  id: number;
  private _createDate: Date;
  private _lastEditDate: Date;
  private _title: string;
  private _content: string;
  private _score: number;
  private _medicine: Medicine;
  private _user: User;

  constructor(title: string, content: string, userId: number) {
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

  public get user(): User{
    return this._user;
  }

  public set user(value: User){
    this._user = value;
  }

  public upVote() {
    this._score += 1;
  }

  public downVote() {
    this._score -= 1;
  }

  public editTitle(updatedTitle: string) {
    this._title = updatedTitle;
    this._lastEditDate = new Date();
  }

  public editContent(updatedContent: string) {
    this._content = updatedContent;
    this._lastEditDate = new Date();
  }

  public editScore(updatedScore: number) {
    this._score = updatedScore;
    this._lastEditDate = new Date();
  }
}
