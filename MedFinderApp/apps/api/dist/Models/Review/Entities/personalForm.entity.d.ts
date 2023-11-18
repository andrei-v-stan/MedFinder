import { IReview } from '../Interfaces/review.interface';
import { PersonalFormField } from './personalFormField.entity';
export declare class PersonalForm implements IReview {
    private _createDate;
    private _lastEditDate;
    private _title;
    private _rating;
    private _fields;
    constructor(title: string, rating: number, fields: PersonalFormField[]);
    get createDate(): Date;
    set createDate(value: Date);
    get lastEditDate(): Date;
    set lastEditDate(value: Date);
    get title(): string;
    set title(value: string);
    get rating(): number;
    set rating(value: number);
    get fields(): PersonalFormField[];
    set fields(value: PersonalFormField[]);
    addField(field: PersonalFormField): void;
    updateField(field: PersonalFormField): void;
    removeField(field: PersonalFormField): void;
}
