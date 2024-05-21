import { Component, Input, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  
  fb = inject(FormBuilder);

  @Input({required:true}) set formFields(val:AbstractControl){
    console.log("ABSTRACT ", val);
  }
  @Input({required:true}) formStructure:any = [];

  dynamicForm = this.fb.group({});

  ngOnInit(): void {
    console.log("formStructure ", this.formStructure);
    
  }


}
