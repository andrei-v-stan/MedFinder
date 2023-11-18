"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalForm = void 0;
class PersonalForm {
    constructor(title, rating, fields) {
        this._title = title;
        this._rating = rating;
        this._fields = fields;
    }
    get createDate() {
        return this._createDate;
    }
    set createDate(value) {
        this._createDate = value;
    }
    get lastEditDate() {
        return this._lastEditDate;
    }
    set lastEditDate(value) {
        this._lastEditDate = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get rating() {
        return this._rating;
    }
    set rating(value) {
        if (value < 1 || value > 10) {
            throw new RangeError('Rating must be between 1 and 10');
        }
        this._rating = value;
    }
    get fields() {
        return this._fields;
    }
    set fields(value) {
        this._fields = value;
    }
    addField(field) {
        this.fields.push(field);
    }
    updateField(field) {
        const index = this.fields.indexOf(field);
        if (index > -1) {
            this.fields[index] = field;
        }
    }
    removeField(field) {
        const index = this.fields.indexOf(field);
        if (index > -1) {
            this.fields.splice(index, 1);
        }
    }
}
exports.PersonalForm = PersonalForm;
//# sourceMappingURL=personalForm.entity.js.map