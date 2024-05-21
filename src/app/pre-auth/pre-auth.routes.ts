import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const PRE_AUTH_ROUTES : Routes = [
    {
        path:"",
        component : LoginComponent
    }
];