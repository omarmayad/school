import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthQuestionComponent } from './fifth-question.component';

describe('FifthQuestionComponent', () => {
  let component: FifthQuestionComponent;
  let fixture: ComponentFixture<FifthQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
