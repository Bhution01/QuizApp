import { Component, OnInit } from '@angular/core';
import { Question, QuestionService } from '../question.service';
import { Answer } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  welcomeMsg:any;
  subject:any;
  questio = new Question(0," "," "," "," "," "," "," ");
  selected:any;
  answer = new Answer(0," "," "," ");
  score:any;
  selectedbtn:boolean=false;

  constructor(private questionService:QuestionService, private router:Router){
    this.welcomeMsg = sessionStorage.getItem("welcomemsg");
    this.subject = sessionStorage.getItem("subject");
    console.log(this.subject);
  }
  ngOnInit(): void {
    this.questionService.getQuestion(this.subject).subscribe(quest=>this.questio=quest);
    console.log(this.questio);
  }

  nextQuestion(){
    this.questionService.nextQuestion().subscribe(que=>this.questio=que);
  }
  
  previousQue(){
    this.questionService.previousQue().subscribe(ques=>this.questio=ques);
  }

  submitted(){
    this.answer.qno = this.questio.qno;
    this.answer.qtext = this.questio.qtext;
    this.answer.answer = this.questio.answer;
    this.answer.submitted = this.selected;
    
    console.log(this.selected);
    this.questionService.submitAns(this.answer).subscribe();
  }

  endExam(){
    this.questionService.endExam().subscribe(scoree=>{this.score=scoree

      sessionStorage.setItem("scoreee",this.score);
      this.router.navigate(['score']);
      console.log(this.score);
  })
  }
}
