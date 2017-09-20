import { Routes, RouterModule }  from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { WiggleComponent } from './wiggle/wiggle.component';
import { ShowcaseLeftComponent } from './showcase-left/showcase-left.component';
import { ShowcaseRightComponent } from './showcase-right/showcase-right.component';
import { BasicAComponent } from './basic-a/basic-a.component';
import { BasicBComponent } from './basic-b/basic-b.component';
import { BasicCComponent } from './basic-c/basic-c.component';
import { BasicDComponent } from './basic-d/basic-d.component';
import { BasicEComponent } from './basic-e/basic-e.component';
import { BasicFComponent } from './basic-f/basic-f.component';
import { BasicGComponent } from './basic-g/basic-g.component';
import { TopKesuComponent } from './top-kesu/top-kesu.component';
import { TopLmnComponent } from './top-lmn/top-lmn.component';
import { TopHclibComponent } from './top-hclib/top-hclib.component';
import { TopSwklsComponent } from './top-swkls/top-swkls.component';
import { TopTenvComponent } from './top-tenv/top-tenv.component';
import { DragulaComponent } from './dragula/dragula.component';

export const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		children: [
			{
				path: "slide",
				component: SlideComponent
			},
			{
				path: "wiggle",
				component: WiggleComponent
			},
			{
				path: "link-showcase",
				component: ShowcaseLeftComponent
			},
			{
				path: "showcase-link",
				component: ShowcaseRightComponent
			},	
			{
				path: "base-a",
				component: BasicAComponent
			},	
			{
				path: "base-b",
				component: BasicBComponent
			},	
			{
				path: "base-c",
				component: BasicCComponent
			},	
			{
				path: "base-d",
				component: BasicDComponent
			},	
			{
				path: "base-e",
				component: BasicEComponent
			},	
			{
				path: "base-f",
				component: BasicFComponent
			},
			{
				path: "base-g",
				component: BasicGComponent
			},
			{
				path: "top-kesu",
				component: TopKesuComponent
			},
			{
				path: "top-lmn",
				component: TopLmnComponent
			},
			{
				path: "top-hclib",
				component: TopHclibComponent
			},
			{
				path: "top-swkls",
				component: TopSwklsComponent
			},
			{
				path: "top-tenv",
				component: TopTenvComponent
			},
			{
				path: "dragula",
				component: DragulaComponent
			},								
			{
				path: "",
				redirectTo: 'slide',
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
export class HomeRouterModule{

}