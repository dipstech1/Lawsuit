import { Component, OnInit, inject } from '@angular/core';
import { QuestionFormComponent } from '../../components/question-form/question-form.component';
import { QuestionnaireService } from '../../service/questionnaire.service';
import { FormGeneratorService } from '../../../../core/service/form-generator.service';
import { FormFieldJSON } from '../../../../shared/ui/dynamic-form/model/form-field';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFormatedFormResponse, IQuestionare } from '../../models/QuestionaireResult';

@Component({
  selector: 'app-questionnaire-container',
  standalone: true,
  imports: [QuestionFormComponent,ReactiveFormsModule],
  templateUrl: './questionnaire-container.component.html',
  styleUrl: './questionnaire-container.component.scss',
  providers:[QuestionnaireService]
})
export class QuestionnaireContainerComponent implements OnInit {
  
  isEditable = false;
  isLinear = true;
  frmStepperList!: FormGroup;

  qs = inject(QuestionnaireService);
  formGenerator = inject(FormGeneratorService);
  fb = inject(FormBuilder);

  formResponse:IFormatedFormResponse[] = []

  constructor(){
    this.frmStepperList = this.fb.group({
      steps:this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.getFormFieldFromStep(0);
  }

  getFormFieldFromStep(step:number){
    this.qs.getFormFields().subscribe((res:IQuestionare) => {      
      console.log("result",res);
      let arr = []
      res.steps.forEach((formFeild) => {
        let obj:any
        let result = this.formGenerator.setDynamicForm(formFeild.data);
        this.addForm(result)
        obj = {...formFeild}
        this.formResponse.push(obj)
      })
    })
  }

  getFormFromStep(step:number){
    const stepControl =  this.frmStepperList.get('steps') as FormArray;
    return stepControl.at(step)
  }

  get stepControl():FormArray{
    return this.frmStepperList.get('steps') as FormArray;
  }

  addForm(response : FormGroup){
     this.stepControl.push(response)

  }


}
