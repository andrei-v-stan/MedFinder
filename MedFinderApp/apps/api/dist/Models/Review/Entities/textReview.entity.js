"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextReview = void 0;
const typeorm_1 = require("typeorm");
class TextReview {
    constructor(title, content) {
        this._title = title;
        this._content = content;
        this._score = 0;
        this._createDate = new Date();
        this._lastEditDate = new Date();
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
    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
        this.lastEditDate = new Date();
    }
    get score() {
        return this._score;
    }
    set score(value) { }
    get medicine() {
        return this._medicine;
    }
    set medicine(value) {
        this._medicine = value;
    }
    upVote() {
        this._score += 1;
    }
    downVote() {
        this._score -= 1;
    }
}
exports.TextReview = TextReview;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TextReview.prototype, "id", void 0);
//# sourceMappingURL=textReview.entity.js.map