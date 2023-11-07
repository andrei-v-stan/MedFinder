import { IReview } from '../Interfaces/review.interface';

export class TextReview implements IReview {
  private _createDate: Date;
  private _lastEditDate: Date;
  private _title: string;
  private _content: string;
  private _score: number;

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

  public upVote() {
    this._score += 1;
  }

  public downVote() {
    this._score -= 1;
  }
}
