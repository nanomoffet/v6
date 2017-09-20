import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BodyComponent } from './pages/body/body.component';


export const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' }, 
  //{ path: 'body/template1', component: Template1Component },  
  { path: '**', redirectTo: 'body' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule{

}
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
