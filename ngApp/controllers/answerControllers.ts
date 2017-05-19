namespace mainsos.Controllers {

  export class AnswerController{

    public answers;
    public answer;
    public newAnswer = {
      aDate: '',
      questionId: '',
      aContent: '',
      userId: '',
      usefullCount: 0
    }

    constructor(private answerService) {
      this.answers = this.answerService.query();
    }

    public add(answer) {
      this.answerService.add({aDate: this.newAnswer.aDate, aContent: this.newAnswer.aContent, userID: this.newAnswer.userId, questionId: this.newAnswer.questionId, usefullCount: this.newAnswer.usefullCount})
        .then((data) => {
          this.newAnswer.aDate = '';
          this.newAnswer.aContent = '';
          this.newAnswer.userId = '';
          this.newAnswer.questionId = '';
          this.newAnswer.usefullCount = 0;
          this.answers.push(data);
        });
    }

    public edit(answer) {
      this.answer = this.answerService.get(answer._id);
    }

    public save() {
      this.answerService.update(this.answer._id);
    }

    public delete(id) {
      this.answerService.delete(id)
        .then((data) => {
          this.answers = this.answerService.getAll();
        });
    }
  }
}
