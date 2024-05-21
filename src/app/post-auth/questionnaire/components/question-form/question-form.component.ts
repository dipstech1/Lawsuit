import { CdkStepperModule } from '@angular/cdk/stepper';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, AbstractControl, FormArray } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight, faSave, faBan } from '@fortawesome/free-solid-svg-icons';
import { StepperComponent } from '../../../../shared/ui/stepper/stepper.component';
import { JsonPipe, NgFor } from '@angular/common';
import { IFormatedFormResponse } from '../../models/QuestionaireResult';
import { DynamicFormComponent } from '../../../../shared/ui/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [FontAwesomeModule,ReactiveFormsModule,StepperComponent,CdkStepperModule, JsonPipe,DynamicFormComponent,NgFor],
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.scss'
})
export class QuestionFormComponent {
  @Input()
  isLinear = true;

  @Input()
  isEditable = true;

  frmValues: object = {};

 
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faSave = faSave;
  faBan = faBan;

  stepperData : IFormatedFormResponse[] = []
  frmStepper! : FormGroup;
  @Input({required:true}) set formStepper(val:FormGroup){
      this.frmStepper = val;
      console.log(" this.stepperData 1",  this.frmStepper);

  };
  @Input({required:true}) set result(val:IFormatedFormResponse[]){
    this.stepperData = val;
    console.log(" this.stepperData 2",  this.stepperData);
    
  }

  get formArray():FormArray {
    return this.frmStepper.get('steps') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 
    // console.log("SSSS ", this.formArray.get([0]))
  }

  submit(): void {
    console.log(this.frmStepper.value);
    this.frmValues = this.frmStepper.value;
  }
}
