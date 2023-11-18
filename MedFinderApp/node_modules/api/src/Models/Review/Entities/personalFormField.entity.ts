export class PersonalFormField {
  private question: string;
  private answer: string;

  constructor(name: string) {
    this.question = name;
  }

  getQuestion() {
    return this.question;
  }

  getAnswer() {
    return this.answer;
  }

  setAnswer(answer: string) {
    this.answer = answer;
  }
}