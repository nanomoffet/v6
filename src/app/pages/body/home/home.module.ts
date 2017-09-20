import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ComponentsModule } from '../../../components/components.module';

import { HomeRouterModule } from './home.routing';
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


@NgModule({
  imports: [
  	CommonModule, 
  	ComponentsModule,
    HomeRouterModule
  ],
  declarations: [
  	SlideComponent,
    HomeComponent,
    WiggleComponent,
    ShowcaseLeftComponent,
    ShowcaseRightComponent,
    BasicAComponent,
    BasicBComponent,
    BasicCComponent,
    BasicDComponent,
    BasicEComponent,
    BasicFComponent,
    BasicGComponent,
    TopKesuComponent,
    TopLmnComponent,
    TopHclibComponent,
    TopSwklsComponent,
    TopTenvComponent,
    DragulaComponent
  ],  
  exports: [
  	SlideComponent,
    HomeComponent,
    WiggleComponent,
    ShowcaseLeftComponent,
    ShowcaseRightComponent
  ]  
})
export class HomeModule {
}