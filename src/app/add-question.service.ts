import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  constructor(private httpClient:HttpClient) { }

  addQuestion(question:Question){
   return this.httpClient.post<void>("http://localhost:9090/QuestionAdd",question);
  }
}
