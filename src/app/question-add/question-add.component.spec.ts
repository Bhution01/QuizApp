import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAddComponent } from './question-add.component';

describe('QuestionAddComponent', () => {
  let component: QuestionAddComponent;
  let fixture: ComponentFixture<QuestionAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionAddComponent]
    });
    fixture = TestBed.createComponent(QuestionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
