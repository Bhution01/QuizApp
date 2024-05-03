import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ScoreComponent } from './score/score.component';
import { QuestionAddComponent } from './question-add/question-add.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:"score", component:ScoreComponent},
  {path:"question-add", component:QuestionAddComponent},
  {path:"admin", component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
