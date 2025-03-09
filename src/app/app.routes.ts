import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
       loadComponent: ()=>import("./home/home.component").then((c)=>c.HomeComponent)
    },
    {
        path: "about",
        loadComponent: ()=>import("./about/about.component").then((c)=>c.AboutComponent)
    },
    {
        path: "contact",
        loadComponent: ()=>import("./contact/contact.component").then((c)=>c.ContactComponent)
    },
    {
        path: "data-binding",
        loadComponent: ()=>import("./data-binding/data-binding.component").then((c)=>c.DataBindingComponent)
    },
    {
        path: "counter",
        loadComponent: ()=>import("./counter/counter.component").then((c)=>c.CounterComponent)
    },
    {
        path: "signup-form",
        loadComponent: ()=>import("./signup-form/signup-form.component").then((c)=>c.SignupFormComponent)
    },
    {
        path: "observable-demo",
        loadComponent: ()=>import("./observable-demo/observable-demo.component").then((c)=>c.ObservableDemoComponent)
    }
];
