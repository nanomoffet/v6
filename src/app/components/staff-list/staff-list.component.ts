import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { StaffMenuService} from './staff-list.service';

export interface IstaffMenus {  data: Array<IstaffHeading> }
export interface IstaffHeading { label: string, items: Array<Istaffmenu>}
export interface Istaffmenu {   label:any, order: any, subItems: Array<Istafflist>,  target: any,  url:string } 
export interface Istafflist {   label: string,   url: string, target: string, order: any }

@Component({
  selector: 'staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css'],
  providers: [StaffMenuService],
  encapsulation: ViewEncapsulation.Native,
})
export class StaffListComponent implements OnInit {
    //@Input() Label : string;
    //@Input() Target : string;
    //@Input() Order : any; 
    //@Input() SubItems : string;
    //@Input() StaffMenus: Array<IstaffMenus>; 
   // @Input() StaffMenu: Array<Istaffmenu>;
    private StaffMenu: Array<IstaffMenus>;

  constructor(private staffListService: StaffMenuService) {
    this.StaffMenu = [{data: null}]
   }
  // constructor() { }

  ngOnInit() {
    this.staffListService.search()
    .subscribe(sub => {
      console.log(sub);
      //debugger;
      this.StaffMenu = sub
    })
      // .then(data =>{ 
      //   if (data) {
      //     this.StaffMenu = data;
      //     console.log(data);
      //     console.log(this.StaffMenu);
      //   }
      //    }
          
        // );
    //console.log(this.staffListService.search());
  }

}
