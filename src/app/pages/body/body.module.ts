import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import {
    OverlayModule
} from '@angular/cdk/overlay';


// modules
import { BodyRouterModule }       from './body.routing';
import { HomeModule } from './home/home.module';
import { ComponentsModule } from '../../components/components.module';

// components
import { BodyComponent } from './body.component';
import { LoginPageComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { IllrequestComponent } from './illrequest/illrequest.component';
import { PlaceholdComponent } from './placehold/placehold.component';
import { RecordComponent } from './record/record.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

// extra - drag and drop functionality
import { DndModule } from 'ng2-dnd';
import { DragulaModule } from 'ng2-dragula';
import { DragComponent } from './drag/drag.component';
import { DropComponent } from './drop/drop.component';
import { StickyModule } from 'ng2-sticky-kit/ng2-sticky-kit';





@NgModule({
  imports: [
  	CommonModule, 
    ComponentsModule,
    FormsModule, 
    ReactiveFormsModule,
	  DndModule.forRoot(),	
	  BrowserAnimationsModule,
    DragulaModule,
    StickyModule,
  	BodyRouterModule,
      HomeModule,
      OverlayModule
  ],
  declarations: [
    BodyComponent,
    LoginPageComponent,
    RecordComponent,
    SearchComponent,
    Template1Component,
    Template2Component,
    Template3Component,
    IllrequestComponent,
    PlaceholdComponent,
    DragComponent,
    DropComponent,
    AccountComponent,
    SignupComponent,
  ],  
  exports: [
    BodyComponent,
    LoginPageComponent,
    FormsModule, 
    ReactiveFormsModule,
    DndModule,
    DragulaModule,
    StickyModule,
    BrowserAnimationsModule,
    IllrequestComponent,
    PlaceholdComponent,
    RecordComponent,
    SearchComponent,
    AccountComponent,
    SignupComponent,
    OverlayModule,
  ]  
})
export class BodyModule {
}


