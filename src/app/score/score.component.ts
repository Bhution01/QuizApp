import { Component, OnInit } from '@angular/core';
import { Answer, QuestionService } from '../question.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit{

  score:any;
  answerr:Answer[] = [];

  constructor(private questionService:QuestionService){
    this.score = sessionStorage.getItem("scoreee");
  }
  ngOnInit(): void {
    this.questionService.getAllAns().subscribe(answw=>this.answerr=answw);
  }

  getColor(answer:string,submitted:string){
    if(answer==submitted){
        return "springgreen";
    }
    else{
      return "Tomato";
    }
  }
}
