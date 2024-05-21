import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"auth",
        loadChildren : ()=> import('./pre-auth/pre-auth.routes').then(m=>m.PRE_AUTH_ROUTES)
    },
    {
        path:"",
        loadChildren:()=> import('./post-auth/post-auth.routing').then(m=>m.POST_AUTH_ROUTES)
    }
];
