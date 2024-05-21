import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireContainerComponent } from './questionnaire-container.component';

describe('QuestionnaireContainerComponent', () => {
  let component: QuestionnaireContainerComponent;
  let fixture: ComponentFixture<QuestionnaireContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionnaireContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionnaireContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
