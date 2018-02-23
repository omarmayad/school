import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhQuestionComponent } from './seventh-question.component';

describe('SeventhQuestionComponent', () => {
  let component: SeventhQuestionComponent;
  let fixture: ComponentFixture<SeventhQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
