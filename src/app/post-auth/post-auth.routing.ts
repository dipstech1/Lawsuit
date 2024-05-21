import { Routes } from "@angular/router";
import { PostAuthShellComponent } from "./post-auth-shell.component";


export const POST_AUTH_ROUTES : Routes = [
    {
        path:"",
        component:PostAuthShellComponent,
        children:[
            {
                path:"question",
                loadComponent : ()=> import('./questionnaire/container/questionnaire-container/questionnaire-container.component').then(c => c.QuestionnaireContainerComponent)
            }
        ]
    }
];