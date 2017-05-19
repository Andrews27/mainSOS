namespace mainsos.Controllers {

  export class QuestionController{
    public questions;
    public question;
    public newQuestion = {
      qTitle: '',
      qContent: '',
      qDate: '',
      userID: '',
      lessonID: '',
      clickCount: 0
    }

    constructor(private questionService) {
      this.questions = questionService.getAll()
    }

    public add(question) {
      this.questionService.add({qTitle: this.newQuestion.qTitle, qContent: this.newQuestion.qContent, userID: this.newQuestion.userID, lessonID: this.newQuestion.lessonID, clickCount: this.newQuestion.clickCount})
        .then((data) => {
          this.newQuestion.qTitle = '';
          this.newQuestion.qContent = '';
          this.newQuestion.qDate = '';
          this.newQuestion.userID = '';
          this.newQuestion.lessonID = '';
          this.newQuestion.clickCount = 0;
          this.questions.push(data);
        });
    }

    public edit(question) {
      this.question = this.questionService.get(question._id);
    }

    public save() {
      this.questionService.update(this.question._id);
    }

    public delete(id) {
      this.questionService.delete(id)
        .then((data) => {
          this.questions = this.questionService.getAll();
        })
    }
  }
}
