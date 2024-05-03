import { Component } from '@angular/core';
import { Question } from '../question.service';
import { AddQuestionService } from '../add-question.service';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent {

  questio = new Question(0," "," "," "," "," "," "," ");

  constructor(private addquestionService:AddQuestionService){}

  addQuestion(){
    this.addquestionService.addQuestion(this.questio).subscribe()
  }
}
