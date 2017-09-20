import { Routes, RouterModule }  from '@angular/router';
import { BodyComponent } from './body.component';
import { LoginPageComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { IllrequestComponent } from './illrequest/illrequest.component';
import { PlaceholdComponent } from './placehold/placehold.component';
import { RecordComponent } from './record/record.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';


import { DragComponent} from './drag/drag.component';
import { DropComponent } from './drop/drop.component';

export const routes: Routes = [
	{
		path: "body",
		component: BodyComponent,
        children: [
			{
                path: "login",
                component: LoginPageComponent
			},
			{
                path: "signup",
                component: SignupComponent
			},			
            {
                path: "account",
                component: AccountComponent
            },
			{
				path: "template1",
				component: Template1Component
			},
			{
				path: "template2",
				component: Template2Component
			},
			{
				path: "template3",
				component: Template3Component
			},
			{
				path:'home', loadChildren: './home/home.module#HomeModule'
			},	
			{
				path:'illrequest',
				component:IllrequestComponent
			},	
			{
				path:'placehold',
				component:PlaceholdComponent
			},
			{
				path:'record',
				component:RecordComponent
			},			
			{
				path:'search',
				component:SearchComponent
			},		
			{
				path:'drag',
				component:DragComponent
			},	
			{
				path:'drop',
				component:DropComponent
			},	
			{
				path: "",
				redirectTo: 'template1',
				pathMatch: "full"
			}			
		]



	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class BodyRouterModule{

}
//export const routing: ModuleWithProviders = RouterModule.forChild(routes);
