import { Component, ElementRef, Input } from '@angular/core';
import * as googleMapLoader from "google-maps";

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
  
   //lat = 34.0677465;
   // lng = -117.6103364;
    //markerTitle:string = "Auto-Graphics Inc."
  
  @Input() lat:any;
  @Input() lng:any;
  @Input() zoom:any;
  @Input() markerTitle:string;

  private myLatLong = {
    lat: 0,
    lng: 0,
  };
  
  

  constructor(private elementRef:ElementRef) { 
      this.zoom =15;
  }

  public ngAfterViewInit(){
    let element = this.elementRef.nativeElement.querySelector(".google-maps");    
    this.myLatLong = {
      lat: this.lat,
      lng: this.lng,
    };

    googleMapLoader.load((google) => {
      let map = new google.maps.Map(element, {
        center: this.myLatLong,
        zoom: this.zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      
      new google.maps.Marker({
        position: this.myLatLong,
        map: map,
        title: this.markerTitle
      })
    });
  }
}
