import { Medicine } from 'src/Models/Medicine/Entities/medicine.entity';
import { IReview } from '../Interfaces/review.interface';
export declare class TextReview implements IReview {
    id: number;
    private _createDate;
    private _lastEditDate;
    private _title;
    private _content;
    private _score;
    private _medicine;
    constructor(title: string, content: string);
    get createDate(): Date;
    set createDate(value: Date);
    get lastEditDate(): Date;
    set lastEditDate(value: Date);
    get title(): string;
    set title(value: string);
    get content(): string;
    set content(value: string);
    get score(): number;
    private set score(value);
    get medicine(): Medicine;
    set medicine(value: Medicine);
    upVote(): void;
    downVote(): void;
}
