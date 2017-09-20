import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Angular Material
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
  MdTooltipModule
} from '@angular/material';
import {
  OverlayModule
} from '@angular/cdk/overlay';

// Bootstrap Components
import {BaAccordionComponent} from './ng-bootstrap/ba-accordion/ba-accordion.component';
import {BaAlertComponent} from './ng-bootstrap/ba-alert/ba-alert.component';
import {BaButtonComponent} from './ng-bootstrap/ba-button/ba-button.component';
import {BaCarouselComponent} from './ng-bootstrap/ba-carousel/ba-carousel.component';
import {BaCollapseComponent} from './ng-bootstrap/ba-collapse/ba-collapse.component';
import {BaDatepickerComponent} from './ng-bootstrap/ba-datepicker/ba-datepicker.component';
import {BaDropdownComponent} from './ng-bootstrap/ba-dropdown/ba-dropdown.component';
import {BaModalComponent} from './ng-bootstrap/ba-modal/ba-modal.component';
import {BaPaginationComponent} from './ng-bootstrap/ba-pagination/ba-pagination.component';
import {BaPopoverComponent} from './ng-bootstrap/ba-popover/ba-popover.component';
import {BaProgressbarComponent} from './ng-bootstrap/ba-progressbar/ba-progressbar.component';
import {BaRatingComponent} from './ng-bootstrap/ba-rating/ba-rating.component';
import {BaRatingOnlyComponent} from './ng-bootstrap/ba-rating-only/ba-rating-only.component';
import {BaTabsComponent} from './ng-bootstrap/ba-tabs/ba-tabs.component';
import {BaTimepickerComponent} from './ng-bootstrap/ba-timepicker/ba-timepicker.component';
import {BaTooltipComponent} from './ng-bootstrap/ba-tooltip/ba-tooltip.component';
import {BaTypeAheadComponent} from './ng-bootstrap/ba-type-ahead/ba-type-ahead.component';
// Reusable Input Elements
import {InputSingleComponent} from './input-elements/input-single/input-single.component';
import {InputTripleComponent} from './input-elements/input-triple/input-triple.component';
import {InputCalendarComponent} from './input-elements/input-calendar/input-calendar.component';
import {InputCheckboxComponent} from './input-elements/input-checkbox/input-checkbox.component';
import {InputSelectComponent} from './input-elements/input-select/input-select.component';
import {InputTextareaComponent} from './input-elements/input-textarea/input-textarea.component';
import {InputCurrencyComponent} from './input-elements/input-currency/input-currency.component';
import {ArticleDateComponent} from './input-elements/input-article-date/input-article-date.component';
//Charts
import {ChartistComponent} from './charts/chartist/chartist.component';
import {BarChartComponent} from './charts/bar-chart/bar-chart.component';
import {DonutChartComponent} from './charts/donut-chart/donut-chart.component';
import {LineChartComponent} from './charts/line-chart/line-chart.component';
import {PieChartComponent} from './charts//pie-chart/pie-chart.component';

import {CalendarComponent} from './calendar/calendar.component';
import {CarouselComponent} from './baCarousel/carousel.component';
import {FullCalendarComponent} from './full-calendar/full-calendar.component';
import {IFrameComponent} from './i-frame/i-frame.component';
import {GoogleMapComponent} from './maps/google-map/google-map.component';
import {LinkComponent} from './link/link.component';
import {GridViewSearchResultComponent} from './grid-view-search-result/grid-view-search-result.component';
import {ListViewSearchResultComponent} from './list-view-search-result/list-view-search-result.component';
import {LoginComponent} from './login/login.component';
import {LoginBarComponent} from './login-bar/login-bar.component';
import {NotificationComponent} from './notification/notification.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {SearchIndexesComponent} from './search-indexes/search-indexes.component';
import {SearchTargetsComponent} from './search-targets/search-targets.component';
import {SlickCarouselComponent} from './slick-carousel/slick-carousel.component';
import {TopPageComponent} from './top-page/top-page.component';
import {SearchOverlayComponent} from './search-overlay/search-overlay.component';
import {FeedBackComponent} from './feed-back/feed-back.component';
import {HeadroomComponent} from './headroom/headroom.component';
import {QuickmenuComponent} from './quick-menu/quickmenu.component';
import {MyListComponent} from './my-list/my-list.component';
import {TopicSearchComponent} from './topic-search/topic-search.component';
import {GridIconsComponent} from './grid-icons/grid-icons.component';
import {SearchFacetComponent} from './search-facet/search-facet.component';
import {SearchResultDescComponent} from './search-result-desc/search-result-desc.component';
import {SearchAddtionsComponent} from './search-addtions/search-addtions.component';
import {SearchAllFacetsComponent} from './search-all-facets/search-all-facets.component';
import {StaffListComponent} from './staff-list/staff-list.component';
//import { GridBriefComponent } from './grid-brief/grid-brief.component';
import {DragulaComponent} from './dragula/dragulaP.component';
import {DragDropComponent} from './drag-drop/drag-drop.component';
import {SlideTogglePatronComponent} from './slide-toggle-patron/slide-toggle-patron.component';
import {SlideToggleStaffComponent} from './slide-toggle-staff/slide-toggle-staff.component';
import {SearchActiveFacetsComponent} from './search-active-facets/search-active-facets.component';

// Account Pages
import {ActProfileComponent} from './act-profile/act-profile.component';
import {ActFavResourcesComponent} from './act-fav-resources/act-fav-resources.component';
import {ActHistoryComponent} from './act-history/act-history.component';
import {ActItemsOtherlibComponent} from './act-items-otherlib/act-items-otherlib.component';
import {ActItemsOutComponent} from './act-items-out/act-items-out.component';
import {ActLinksComponent} from './act-links/act-links.component';
import {ActPreferenceComponent} from './act-preference/act-preference.component';
import {ActQuickmenuComponent} from './act-quickmenu/act-quickmenu.component';
import {ActYourListComponent} from './act-your-list/act-your-list.component';
import {ActItemsHoldComponent} from './act-items-hold/act-items-hold.component';
import {ActItemsLostComponent} from './act-items-lost/act-items-lost.component';
import {ActActiveAlertsComponent} from './act-active-alerts/act-active-alerts.component';
import {ActItemLostfineComponent} from './act-item-lostfine/act-item-lostfine.component';

// Edit Components
import {EditEventComponent} from './edits/edit-event/edit-event.component';
import {EditPageComponent} from './edits/edit-page/edit-page.component';
import {EditSidenavComponent} from './edits/edit-sidenav/edit-sidenav.component';
import {GridBriefComponent} from "./grid-brief/grid-brief.component";
// import {ActItemsHoldComponent} from "./act-items-hold/act-items-hold.component";
// import {ActActiveAlertsComponent} from "./act-active-alerts/act-active-alerts.component";
// import {ActItemLostfineComponent} from "./act-item-lostfine/act-item-lostfine.component";
// import {ActItemsLostComponent} from "./act-items-lost/act-items-lost.component";


// ActProfileComponent, ActFavResourcesComponent, ActHistoryComponent, ActItemsOtherlibComponent, ActItemsOutComponent, ActLinksComponent, ActPreferenceComponent, ActQuickmenuComponent, ActYourListComponent
// ActItemsHoldComponent, ActItemsLostComponent, ActActiveAlertsComponent, ActItemLostfineComponent

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    OverlayModule,
    // Angular Material
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
  ],
  declarations: [

    //Bootstrap Elements
    BaAccordionComponent,
    BaAlertComponent,
    BaButtonComponent,
    BaCarouselComponent,
    BaCollapseComponent,
    BaDatepickerComponent,
    BaDropdownComponent,
    BaModalComponent,
    BaPaginationComponent,
    BaPopoverComponent,
    BaProgressbarComponent,
    BaRatingComponent,
    BaRatingOnlyComponent,
    BaTabsComponent,
    BaTimepickerComponent,
    BaTooltipComponent,
    BaTypeAheadComponent,
    //ChartistJs
    BarChartComponent,
    ChartistComponent,
    PieChartComponent,
    DonutChartComponent,
    LineChartComponent,
    // Account Pages
    ActProfileComponent,
    ActFavResourcesComponent,
    ActHistoryComponent,
    ActItemsOtherlibComponent,
    ActItemsOutComponent,
    ActLinksComponent,
    ActPreferenceComponent,
    ActQuickmenuComponent,
    ActYourListComponent,
    ActItemsHoldComponent,
    ActItemsLostComponent,
    ActActiveAlertsComponent,
    ActItemLostfineComponent,

    // General Elements
    CalendarComponent,
    CarouselComponent,
    DragulaComponent,
    DragDropComponent,
    FullCalendarComponent,
    GoogleMapComponent,
    GridIconsComponent,
    IFrameComponent,
    HeadroomComponent,
    LinkComponent,
    GridViewSearchResultComponent,
    ListViewSearchResultComponent,
    LoginBarComponent,
    LoginComponent,
    NotificationComponent,
    SearchAddtionsComponent,
    SearchAllFacetsComponent,
    SearchBarComponent,
    SearchFacetComponent,
    SearchIndexesComponent,
    SearchOverlayComponent,
    SearchResultDescComponent,
    SearchTargetsComponent,
    SlickCarouselComponent,
    TopicSearchComponent,
    TopPageComponent,
    FeedBackComponent,
    MyListComponent,
    QuickmenuComponent,
    StaffListComponent,
    SlideTogglePatronComponent,
    SlideToggleStaffComponent,
    // Reusable Input Elements
    InputSingleComponent,
    InputTripleComponent,
    InputCalendarComponent,
    InputCheckboxComponent,
    InputSelectComponent,
    InputTextareaComponent,
    InputCurrencyComponent,
    ArticleDateComponent,
    SearchActiveFacetsComponent,
    EditEventComponent,
    EditPageComponent,
    EditSidenavComponent,
    ActItemsHoldComponent,
    ActItemsLostComponent,
    ActActiveAlertsComponent,
    ActItemLostfineComponent,
    //
    DragDropComponent,
    MyListComponent,
    GridBriefComponent,


  ],
  exports: [
    //Material
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


    //Bootstrap Elements
    BaAccordionComponent,
    BaAlertComponent,
    BaButtonComponent,
    BaCarouselComponent,
    BaCollapseComponent,
    BaDatepickerComponent,
    BaDropdownComponent,
    BaModalComponent,
    BaPaginationComponent,
    BaPopoverComponent,
    BaProgressbarComponent,
    BaRatingComponent,
    BaRatingOnlyComponent,
    BaTabsComponent,
    BaTimepickerComponent,
    BaTooltipComponent,
    BaTypeAheadComponent,
    //ChartistJs
    BarChartComponent,
    PieChartComponent,
    DonutChartComponent,
    LineChartComponent,
    // Account Pages
    ActProfileComponent,
    ActFavResourcesComponent,
    ActHistoryComponent,
    ActItemsOtherlibComponent,
    ActItemsOutComponent,
    ActLinksComponent,
    ActPreferenceComponent,
    ActQuickmenuComponent,
    ActYourListComponent,
    ActItemsHoldComponent,
    ActItemsLostComponent,
    ActActiveAlertsComponent,
    ActItemLostfineComponent,

    //General Elements
    CalendarComponent,
    CarouselComponent,
    DragulaComponent,
    DragDropComponent,
    FeedBackComponent,
    GridIconsComponent,
    GoogleMapComponent,
    HeadroomComponent,
    IFrameComponent,
    LinkComponent,
    GridViewSearchResultComponent,
    ListViewSearchResultComponent,
    LoginBarComponent,
    LoginComponent,
    NotificationComponent,
    SearchAddtionsComponent,
    SearchAllFacetsComponent,
    SearchBarComponent,
    SearchFacetComponent,
    SearchIndexesComponent,
    SearchOverlayComponent,
    SearchResultDescComponent,
    SearchTargetsComponent,
    SearchActiveFacetsComponent,
    SlickCarouselComponent,
    StaffListComponent,
    TopicSearchComponent,
    TopPageComponent,
    QuickmenuComponent,
    MyListComponent,
    SlideTogglePatronComponent,
    SlideToggleStaffComponent,
    // Reusable Input Elements
    InputSingleComponent,
    InputTripleComponent,
    InputCalendarComponent,
    InputCheckboxComponent,
    InputSelectComponent,
    InputTextareaComponent,
    InputCurrencyComponent,
    ArticleDateComponent,

    // Edit functions
    EditEventComponent,
    EditPageComponent,
    EditSidenavComponent,


  ],
  providers: []
})
export class ComponentsModule {
}
