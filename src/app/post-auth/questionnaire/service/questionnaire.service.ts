import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { FormField, FormFieldJSON } from "../../../shared/ui/dynamic-form/model/form-field";
import { IQuestionare } from "../models/QuestionaireResult";

enum StepWithForm{
  'assets/will/firstStep.json' = 0,
  'assets/will/secondStep.json'
}

@Injectable()
export class QuestionnaireService {
    http = inject(HttpClient);
    

    getFormFields(step = 0): Observable<IQuestionare> {
        return this.http.get<IQuestionare>(StepWithForm[step]);
    }
}