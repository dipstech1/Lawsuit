import { Injectable, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormFieldJSON, ValidatorJSON } from '../../shared/ui/dynamic-form/model/form-field';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {
  fb = inject(FormBuilder);
  formFields: FormFieldJSON[] = []
  

  constructor() { }

  setDynamicForm(controls: FormFieldJSON[]) {
    let dynamicForm = this.fb.group({});
    for (const control of controls) {
      const validators = [];
      if (control.validators?.length) {
        control.validators.forEach((validation : ValidatorJSON) => {
          if (validation.validator === 'required')
            validators.push(Validators.required);
          if (validation.validator === 'email')
            validators.push(Validators.email);
        })
        validators.push(Validators.required);
      }
      dynamicForm.addControl(control.name, this.fb.control(control.value, validators));
      
    }
    return dynamicForm;
  }
}
