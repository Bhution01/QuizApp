import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient:HttpClient) { }

  getQuestion(subject:any){
    console.log(subject);
   return this.httpClient.get<Question>("http://localhost:9090/getQuestion/"+subject)
    
  }

  nextQuestion(){
   return this.httpClient.get<Question>("http://localhost:9090/nextQuestion")
  }


  previousQue(){
   return this.httpClient.get<Question>("http://localhost:9090/previousQue")
  }


  endExam(){
  return this.httpClient.get<number>("http://localhost:9090/endExam")
  }

  submitAns(answer:Answer){
   return this.httpClient.post<void>("http://localhost:9090/submitAns",answer)
  }

  getAllAns(){
   return this.httpClient.get<Answer[]>("http://localhost:9090/getAllAns")
  }

}


export class Question{

  qno:number;
  qtext:string;
  op1:string;
  op2:string;
  op3:string;
  op4:string;
  answer:string;
  subject:string;

  constructor( qno:number,qtext:string,op1:string,op2:string,op3:string,op4:string,answer:string,subject:string){

    this.qno=qno;
    this.qtext=qtext;
    this.op1=op1;
    this.op2=op2;
    this.op3=op3;
    this.op4=op4;
    this.answer=answer;
    this.subject=subject;
  }
}

export class Answer{
  qno:number;
  qtext:string;
  answer:any;
  submitted:any;

  constructor( qno:number,qtext:string,answer:any,submitted:any){
    this.qno=qno;
    this.qtext=qtext;
    this.answer=answer;
    this.submitted=submitted;

  }
}
