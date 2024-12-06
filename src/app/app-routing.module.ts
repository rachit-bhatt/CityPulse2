import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./MyComponents/about-us/about-us.component";
import { OurServicesComponent } from "./MyComponents/our-services/our-services.component";
import { OurCustomersComponent } from "./MyComponents/our-customers/our-customers.component";

const routes: Routes = [
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'our-services',
        component: OurServicesComponent
    },
    {
        path: 'our-customers',
        component: OurCustomersComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

export const routingComponents = [
    AboutUsComponent,
    OurServicesComponent,
    OurCustomersComponent
]