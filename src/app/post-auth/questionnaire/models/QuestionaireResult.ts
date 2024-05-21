import { FormGroup } from "@angular/forms"
import {  FormFieldJSON } from "../../../shared/ui/dynamic-form/model/form-field"

export interface IQuestionare{
        steps:ISteps[]
}

export interface ISteps{
    stepNo : number,
    stepLabel : string,
    data : FormFieldJSON[]
}

export interface IFormatedFormResponse{
    stepNo : number,
    stepLabel : string,
    data : FormGroup,
    formStructure: FormFieldJSON
}