import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { BodyModule } from './pages/body/body.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule} from './app.routing';

//front end directives.
import { Ng2DragDropModule } from 'ng2-drag-drop';
import {StickyModule} from 'ng2-sticky-kit/ng2-sticky-kit';
import { ScrollSpyModule } from 'ngx-scrollspy';








import {
	APIServiceService,
	SearchIndexService,
	TokenService,
	StorageService,
    SearchService,
    FacetService,
	//SearchTargetService,	
    ConfigService,
} from './services';


const SERVICES = [
	APIServiceService,
	SearchIndexService,
	TokenService,
	StorageService,
  SearchService,
  FacetService,
  ConfigService,
	//SearchTargetService,	
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,   
    NgbModule.forRoot(),   
    BrowserAnimationsModule, 
    //CommonModule,    
    ComponentsModule,
    Ng2DragDropModule.forRoot(),
    ScrollSpyModule.forRoot(),
    StickyModule,
    BodyModule,
    HttpModule,
    HttpClientModule,    
    AppRoutingModule,
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
