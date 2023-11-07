import { PersonalFormField } from './../../../src/Models/Review/Entities/personalFormField.entity';
import { PersonalForm } from './../../../src/Models/Review/Entities/personalForm.entity';
import { TextReview } from './../../../src/Models/Review/Entities/textReview.entity';

const SUT = {
  personalForm: {
    createDate: new Date(),
    lastEditDate: new Date(),
    title: 'Test title',
    rating: 10,
    fields: [new PersonalFormField('How old are you')],
  },
};

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('Review', () => {
  it('should create a PersonalForm instance', () => {
    let personalForm: PersonalForm;

    personalForm = new PersonalForm(
      SUT.personalForm.title,
      SUT.personalForm.rating,
      SUT.personalForm.fields,
    );

    expect(personalForm).toBeInstanceOf(PersonalForm);
    expect(personalForm.title).toEqual(SUT.personalForm.title);
    expect(personalForm.rating).toEqual(SUT.personalForm.rating);
    expect(personalForm.fields).toEqual(SUT.personalForm.fields);
  });

  it('should throw RangeError if rating is not between 1 and 10', () => {
    let personalForm = new PersonalForm('title', 1, []);

    expect(() => {
      personalForm.rating = -1;
    }).toThrow(new RangeError('Rating must be between 1 and 10'));
  });

  it('should update lastEditDate when changing content', async () => {
    let textReview = new TextReview('Test title', 'Test Content');
    let oldLastEditDate = new Date(textReview.lastEditDate);

    await delay(50);
    textReview.content = 'New content';

    expect(textReview.lastEditDate.getTime()).toBeGreaterThan(
      oldLastEditDate.getTime(),
    );
  });

  it('should add a field to the personal form', () => {
    let personalForm = new PersonalForm('Test', 10, [
      new PersonalFormField('Height'),
    ]);
    let oldCount = personalForm.fields.length;
    let newField = new PersonalFormField('Weight');

    personalForm.addField(newField);

    let newCount = personalForm.fields.length;
    expect(newCount).toEqual(oldCount + 1);
  });

  it('should increase text review score by 1 when upvote', () => {
    let textReview = new TextReview('Title', 'This is some content.');
    let oldScore = textReview.score;
    
    textReview.upVote();

    expect(textReview.score).toEqual(oldScore + 1);
  });
});
