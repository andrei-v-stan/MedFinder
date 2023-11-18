"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalFormField = void 0;
class PersonalFormField {
    constructor(name) {
        this.question = name;
    }
    getQuestion() {
        return this.question;
    }
    getAnswer() {
        return this.answer;
    }
    setAnswer(answer) {
        this.answer = answer;
    }
}
exports.PersonalFormField = PersonalFormField;
//# sourceMappingURL=personalFormField.entity.js.map