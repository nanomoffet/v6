import { Component, OnInit, ViewEncapsulation, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-wiggle',
  templateUrl: './wiggle.component.html',
  styleUrls: ['./wiggle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WiggleComponent implements OnInit {
  //test:any="some text"
  //@Input() Label : string;


// This is the Interface from staff-list.component.ts
//export interface IstaffMenus {  data: Array<IstaffHeading> }
//export interface IstaffHeading { label: string, items: Array<Istaffmenu>}
//export interface Istaffmenu {   label:any, order: any, subItems: Array<Istafflist>,  target: any,  url:string } 
//export interface Istafflist {   label: string,   url: string, target: string, order: any }


private StaffList = 
// just paste array from : localhost:3001/v1/staffMenu/customer/tenv/library/tenv/user/1/getStaffMenu
{
    "data": [
        {
            "label": "Circulation",
            "items": []
        },
        {
            "label": "Circ Admin",
            "items": []
        },
        {
            "label": "Cat Admin",
            "items": [
                {
                    "label": "View Download Cart",
                    "url": "http://localhost/MVC/Cart",
                    "target": "target='Main'",
                    "order": 1,
                    "subItems": null
                },
                {
                    "label": "Download AGCat Utility",
                    "url": "http://localhost/MVC/AGCat",
                    "target": "target='Main'",
                    "order": 2,
                    "subItems": null
                },
                {
                    "label": "Create New CAT Record",
                    "url": "http://localhost/MVC/AGCat/CreateNewRec",
                    "target": "target='Main'",
                    "order": 3,
                    "subItems": null
                },
                {
                    "label": "Local Cover Images",
                    "url": "",
                    "target": "",
                    "order": 4,
                    "subItems": [
                        {
                            "label": "Add Local Cover",
                            "url": "http://localhost/ils/BuildFrameset.aspx?w=FAA&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 1
                        },
                        {
                            "label": "Delete Local Cover",
                            "url": "http://localhost/ils/BuildFrameset.aspx?w=FDA&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 2
                        }
                    ]
                },
                {
                    "label": "Add Item",
                    "url": "",
                    "target": "",
                    "order": 5,
                    "subItems": [
                        {
                            "label": "Add Item",
                            "url": "http://localhost/ils/BuildFrameset.aspx?w=FAH&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 1
                        },
                        {
                            "label": "Set Add Defaults",
                            "url": "http://localhost/ILS/BuildFrameset.aspx?w=FAHD&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 2
                        }
                    ]
                },
                {
                    "label": "Edit Item",
                    "url": "http://localhost/ils/BuildFrameset.aspx?w=FEH&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 6,
                    "subItems": null
                },
                {
                    "label": "Item Status",
                    "url": "http://localhost/ILSP/Circulation/ItemStatus",
                    "target": "target='Main'",
                    "order": 7,
                    "subItems": null
                },
                {
                    "label": "Add Brief Record",
                    "url": "http://localhost/ILSP/Circulation/AddBriefRecord",
                    "target": "target='Main'",
                    "order": 8,
                    "subItems": null
                },
                {
                    "label": "Bib Record Merge",
                    "url": "http://localhost/ILSP/CatAdmin/BibRecordMerge",
                    "target": "target='Main'",
                    "order": 9,
                    "subItems": null
                },
                {
                    "label": "Authority Database Connection",
                    "url": "http://localhost/agent/authconndisp.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 10,
                    "subItems": null
                },
                {
                    "label": "Authority Heading Report",
                    "url": "http://localhost/AGentStats/Reports/AuthorityHeadingsReport.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 11,
                    "subItems": null
                },
                {
                    "label": "MARC Import",
                    "url": "",
                    "target": "",
                    "order": 12,
                    "subItems": [
                        {
                            "label": "Item Generation Setup",
                            "url": "http://localhost/ils/BuildFrameset.aspx?w=FHM&type=I&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 1
                        },
                        {
                            "label": "BibTool Admin",
                            "url": "http://localhost/ils/BuildFrameset.aspx?w=FBTR&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 2
                        },
                        {
                            "label": "Matching Sets Admin",
                            "url": "http://localhost/ils/BuildFrameset.aspx?w=FMS&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 3
                        },
                        {
                            "label": "Set MARC Load Defaults",
                            "url": "http://localhost/ils/BuildFrameset.aspx?w=FBTLD&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 4
                        }
                    ]
                },
                {
                    "label": "MARC Export",
                    "url": " ",
                    "target": " ",
                    "order": 13,
                    "subItems": [
                        {
                            "label": "Item Generation Setup",
                            "url": "http://localhost/ils/BuildFrameset.aspx?w=FHM&type=E&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 1
                        },
                        {
                            "label": "Export Admin",
                            "url": "http://localhost/ils/BuildFrameset.aspx?w=FMER&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 2
                        }
                    ]
                },
                {
                    "label": "Create New Digital Collection Record",
                    "url": "http://localhost/agent/agcat.asp?w=NDC&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 14,
                    "subItems": null
                },
                {
                    "label": "Inventory",
                    "url": "",
                    "target": "",
                    "order": 15,
                    "subItems": [
                        {
                            "label": "Load Inventory",
                            "url": "http://localhost/ils/inv_upload.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 1
                        },
                        {
                            "label": "Inventory Reports",
                            "url": "http://localhost/ils/inv_report.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 2
                        },
                        {
                            "label": "Online Barcode Entry",
                            "url": "http://localhost/ils/inv_one.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 3
                        },
                        {
                            "label": "Set Missing Items Exception",
                            "url": "http://localhost/ils/inv_set_exception.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 4
                        },
                        {
                            "label": "Delete Inventory File",
                            "url": "http://localhost/ils/inv_delete.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 5
                        }
                    ]
                },
                {
                    "label": "Print Labels",
                    "url": "",
                    "target": "",
                    "order": 16,
                    "subItems": [
                        {
                            "label": "Select Labels",
                            "url": "http://localhost/ils/spine_get.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 1
                        },
                        {
                            "label": "Review Labels",
                            "url": "http://localhost/ils/spine_review.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 2
                        },
                        {
                            "label": "Print Labels",
                            "url": "http://localhost/MVC/Print/PrintLabels",
                            "target": "target='Main'",
                            "order": 5
                        },
                        {
                            "label": "Print Barcode Labels",
                            "url": "http://localhost/MVC/Print/PrintBarcodeLabels",
                            "target": "target='Main'",
                            "order": 6
                        }
                    ]
                },
                {
                    "label": "Set Workstation Printer",
                    "url": "http://localhost/MVC/Print",
                    "target": "target='Main'",
                    "order": 18,
                    "subItems": null
                },
                {
                    "label": "Print Barcodes",
                    "url": "http://localhost/MVC/Print/PrintBarcodes",
                    "target": "target='Main'",
                    "order": 19,
                    "subItems": null
                },
                {
                    "label": "GSR",
                    "url": "http://localhost/GSRWeb/GSRList.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 21,
                    "subItems": null
                },
                {
                    "label": "URL (856) Checker",
                    "url": "http://localhost/ILS/URLChecker.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 22,
                    "subItems": null
                },
                {
                    "label": "SAGE",
                    "url": "http://localhost/ILSP/Sage/Sage",
                    "target": "target='Main'",
                    "order": 23,
                    "subItems": null
                },
                {
                    "label": "About AGent",
                    "url": "http://localhost/AGent/aboutpage.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cusrvr=cupid&cuid=TENV",
                    "target": "target='Main'",
                    "order": 24,
                    "subItems": null
                },
                {
                    "label": "AGent News",
                    "url": "http://localhost/techsupp/agent/news/news.html?",
                    "target": "target='Main'",
                    "order": 25,
                    "subItems": null
                }
            ]
        },
        {
            "label": "Circ Reports",
            "items": [
                {
                    "label": "Report Writer",
                    "url": "http://localhost/ILSP/CIRCReports/CircReports",
                    "target": "target='Main'",
                    "order": 1,
                    "subItems": null
                },
                {
                    "label": "Run Reports",
                    "url": "http://localhost/ils/BuildFrameset.aspx?w=RR&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 2,
                    "subItems": null
                },
                {
                    "label": "View Reports",
                    "url": "http://localhost/ils/BuildFrameset.aspx?w=RV&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 3,
                    "subItems": null
                }
            ]
        },
        {
            "label": "Statistics",
            "items": []
        },
        {
            "label": "User Admin",
            "items": [
                {
                    "label": "Add a User",
                    "url": "http://localhost/agent/useracct.asp?w=ua&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 1,
                    "subItems": null
                },
                {
                    "label": "Maintain RPA Error Codes",
                    "url": "http://localhost/agent/useracct.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&w=vbc&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 2,
                    "subItems": null
                },
                {
                    "label": "Delete Obsolete Records",
                    "url": "http://localhost/agent/useracct.asp?w=dor&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 3,
                    "subItems": null
                },
                {
                    "label": "Edit User Accounts",
                    "url": "http://localhost/ils/BuildFrameset.aspx?w=UA&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 4,
                    "subItems": null
                },
                {
                    "label": "Global Edit User Accounts",
                    "url": "http://localhost/ils/BuildFrameset.aspx?w=GUA&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 5,
                    "subItems": null
                },
                {
                    "label": "Edit User Accounts",
                    "url": "http://localhost/ils/BuildFrameset.aspx?w=UA&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 6,
                    "subItems": null
                },
                {
                    "label": "Global User Permissions",
                    "url": "http://localhost/ils/BuildFrameset.aspx?w=GUP&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 7,
                    "subItems": null
                },
                {
                    "label": "Import User Accounts",
                    "url": "http://localhost/ils/BuildFrameset.aspx?w=UPUSERLIST&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 8,
                    "subItems": null
                },
                {
                    "label": "Define Valid IP Ranges",
                    "url": "http://localhost/agent/useracct.asp?w=dir&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 9,
                    "subItems": null
                },
                {
                    "label": "Configure User Record",
                    "url": "http://localhost/agent/useracct.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&w=euc&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 10,
                    "subItems": null
                },
                {
                    "label": "Self Registration Management",
                    "url": "http://localhost/ils/SelfRegistration.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 11,
                    "subItems": null
                },
                {
                    "label": "User Registration Duplicate Checking",
                    "url": "http://localhost/ILS/User/UserDupDetection.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 12,
                    "subItems": null
                },
                {
                    "label": "User Reports",
                    "url": "http://localhost/agent/reports.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&w=ru&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 13,
                    "subItems": null
                },
                {
                    "label": "Reader Reviews Summary",
                    "url": "http://localhost/ils/BuildFrameset.aspx?w=PR&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 14,
                    "subItems": null
                },
                {
                    "label": "Valid Barcode Ranges",
                    "url": "http://localhost/agent/BlockedRangeFrameset.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 15,
                    "subItems": null
                },
                {
                    "label": "Search IP Ranges",
                    "url": "http://localhost/UserAdmin/BuildFrameset.aspx?w=MGLOBALIP&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 16,
                    "subItems": null
                },
                {
                    "label": "Global IP Options",
                    "url": "http://localhost/UserAdmin/BuildFrameset.aspx?w=FGLOBALIP&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 17,
                    "subItems": null
                },
                {
                    "label": "Patron Categories",
                    "url": "http://localhost/ils/adminContentFrameset.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid&menu=PatronCategories",
                    "target": "target='Main'",
                    "order": 18,
                    "subItems": null
                },
                {
                    "label": "Patron Groups",
                    "url": "http://localhost/ils/adminContentFrameset.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid&menu=PatronGroups",
                    "target": "target='Main'",
                    "order": 19,
                    "subItems": null
                },
                {
                    "label": "Default User Password",
                    "url": "http://localhost/ils/user/DefaultPassword.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 20,
                    "subItems": null
                },
                {
                    "label": "Staff Login Management",
                    "url": "http://localhost/ILS/StaffLoginManagement.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 21,
                    "subItems": null
                },
                {
                    "label": "Staff Seats Management",
                    "url": "http://localhost/ILS/StaffSeatsManagement.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 22,
                    "subItems": null
                },
                {
                    "label": "About AGent",
                    "url": "http://localhost/AGent/aboutpage.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cusrvr=cupid&cuid=TENV",
                    "target": "target='Main'",
                    "order": 23,
                    "subItems": null
                },
                {
                    "label": "AGent News",
                    "url": "http://localhost/techsupp/agent/news/news.html?",
                    "target": "target='Main'",
                    "order": 24,
                    "subItems": null
                },
                {
                    "label": "User Guides",
                    "url": "http://localhosthttp://www5.auto-graphics.com/folder2",
                    "target": "target='Main'",
                    "order": 25,
                    "subItems": null
                }
            ]
        },
        {
            "label": "Pac Admin",
            "items": [
                {
                    "label": "Modify A Library Profile",
                    "url": "http://localhost/PACAdmin/LibProfile.asp?a=a&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 1,
                    "subItems": null
                },
                {
                    "label": "Modify My Library Profile",
                    "url": "http://localhost/PACAdmin/LibProfile.asp?a=m&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 2,
                    "subItems": null
                },
                {
                    "label": "Display Libraries for Login",
                    "url": "http://localhost/MVC/Administration/MngDispLibraries",
                    "target": "target='Main'",
                    "order": 3,
                    "subItems": null
                },
                {
                    "label": "Kids' Catalog Admin",
                    "url": "",
                    "target": "",
                    "order": 4,
                    "subItems": [
                        {
                            "label": "Define Records",
                            "url": "http://localhost/Iluminar/KidsCat/EditKidOption.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 1
                        },
                        {
                            "label": "Kids' Cat Options",
                            "url": "http://localhost/Iluminar/KidsCat/EditKidAdminOption.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 2
                        },
                        {
                            "label": "Level 1 Categories",
                            "url": "http://localhost/iluminar/kidscat/Level1Categories.aspx?level=1&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 3
                        },
                        {
                            "label": "Level 2 Categories",
                            "url": "http://localhost/iluminar/kidscat/Level1Categories.aspx?level=2&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 4
                        },
                        {
                            "label": "Level 3 Categories",
                            "url": "http://localhost/iluminar/kidscat/Level1Categories.aspx?level=3&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 5
                        },
                        {
                            "label": "Showcase Items",
                            "url": "http://localhost/iluminar/kidscat/EditShowcase.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 6
                        }
                    ]
                },
                {
                    "label": "Record Display Hotlinks",
                    "url": "http://localhost/PACAdmin/RecDspHotlinksMAIN.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 5,
                    "subItems": null
                },
                {
                    "label": "Modify Library Types",
                    "url": "http://localhost/PACAdmin/LibTypesMAIN.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 6,
                    "subItems": null
                },
                {
                    "label": "Buy or Suggest",
                    "url": "http://localhost/PACAdmin/bbs.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 7,
                    "subItems": null
                },
                {
                    "label": "Reader Reviews",
                    "url": "",
                    "target": "",
                    "order": 8,
                    "subItems": [
                        {
                            "label": "Manage Reviews",
                            "url": "http://localhost/PACAdmin/ManageReaderReview.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 1
                        },
                        {
                            "label": "Mediate Reviews",
                            "url": "http://localhost/PACAdmin/MediateReaderReview.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 2
                        },
                        {
                            "label": "Reviews Summary",
                            "url": "http://localhost/ils/BuildFrameset.aspx?w=PR&pac=Y&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 3
                        }
                    ]
                },
                {
                    "label": "RSS Feeds",
                    "url": "http://localhost/PacAdmin/rssfeedpolicy.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 9,
                    "subItems": null
                },
                {
                    "label": "Lists",
                    "url": "http://localhost/PACAdmin/BibAdmin.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 10,
                    "subItems": null
                },
                {
                    "label": "Record Display Format",
                    "url": "http://localhost/PACAdmin/DefineRecordDspFormat.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 11,
                    "subItems": null
                },
                {
                    "label": "Record Display Profiles",
                    "url": "http://localhost/PACAdmin/recdsp.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 12,
                    "subItems": null
                },
                {
                    "label": "Define Resource Headings",
                    "url": "http://localhost/PACAdmin/categories.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 13,
                    "subItems": null
                },
                {
                    "label": "Search Resources",
                    "url": "http://localhost/PACAdmin/SrchPools.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 14,
                    "subItems": null
                },
                {
                    "label": "Public Search Resources",
                    "url": "http://localhost/PacAdmin/SrchPoolsPub.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 15,
                    "subItems": null
                },
                {
                    "label": "Select From z39.50 Site Pool",
                    "url": "http://localhost/PacAdmin/SelectZ3950SitePool.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 16,
                    "subItems": null
                },
                {
                    "label": "Define/Maintain Scoping Levels",
                    "url": "http://localhost/PACAdmin/ScopingLevels.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 17,
                    "subItems": null
                },
                {
                    "label": "Define/Maintain Location Groups",
                    "url": "http://localhost/PACAdmin/LocGroups.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 18,
                    "subItems": null
                },
                {
                    "label": "Modify A Library's Available Search Sources",
                    "url": "http://localhost/PACAdmin/CSPools.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 19,
                    "subItems": null
                },
                {
                    "label": "Replicate Search Sources",
                    "url": "http://localhost/PACAdmin/ReplPools.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 20,
                    "subItems": null
                },
                {
                    "label": "Select Search Indexes",
                    "url": "http://localhost/PacAdmin/DefineSearchIndexes.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 21,
                    "subItems": null
                },
                {
                    "label": "Select Library Search Indexes",
                    "url": "http://localhost/PacAdmin/DefineSearchIndexes.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid&lib=Y",
                    "target": "target='Main'",
                    "order": 22,
                    "subItems": null
                },
                {
                    "label": "Z3950 Transaction Error Logs",
                    "url": "http://localhost/PACAdmin/errorlog.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 23,
                    "subItems": null
                },
                {
                    "label": "Configure Enhanced Record Display",
                    "url": "http://localhost/PACAdmin/enhancerecdsp.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 24,
                    "subItems": null
                },
                {
                    "label": "Patron Statistics",
                    "url": "http://localhost/PACAdmin/PatronStats.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 25,
                    "subItems": null
                },
                {
                    "label": "Modify UDMM Permissions",
                    "url": "http://localhost/PACAdmin/udmmmain.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 26,
                    "subItems": null
                },
                {
                    "label": "Modify Holdings Maintenance Permissions",
                    "url": "http://localhost/PACAdmin/hmpermmain.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 27,
                    "subItems": null
                },
                {
                    "label": "Modify AGCat Permissions",
                    "url": "http://localhost/PACAdmin/catpermmain.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 28,
                    "subItems": null
                },
                {
                    "label": "Maintain Search Tabs",
                    "url": "http://localhost/LangAdmin/ContentFrameset.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid&menu=MtnSchTab",
                    "target": "target='Main'",
                    "order": 29,
                    "subItems": null
                },
                {
                    "label": "Map Library Codes",
                    "url": "http://localhost/agent/LibCodeMap.asp?w=LMLC&guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 30,
                    "subItems": null
                },
                {
                    "label": "Manage Feedback Form",
                    "url": "http://localhost/PACAdmin/feedbackadmin.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 31,
                    "subItems": null
                },
                {
                    "label": "Manage Search Settings",
                    "url": "http://localhost/LangAdmin/SearchManage.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                    "target": "target='Main'",
                    "order": 32,
                    "subItems": null
                },
                {
                    "label": "Manage Default Search Settings",
                    "url": "http://localhost/LangAdmin/SearchManage.aspx?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid&TargetLibPK=0",
                    "target": "target='Main'",
                    "order": 33,
                    "subItems": null
                },
                {
                    "label": "Maintain System Alerts",
                    "url": "",
                    "target": "target='Main'",
                    "order": 34,
                    "subItems": [
                        {
                            "label": "Define Z39.50 Status Check",
                            "url": "http://localhost/PACAdmin/ZSiteAlerts.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 1
                        },
                        {
                            "label": "Define NCIP Status Check",
                            "url": "http://localhost/PACAdmin/NCIPSiteAlerts.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 2
                        },
                        {
                            "label": "NCIP Transaction Error Logs",
                            "url": "http://localhost/PACAdmin/NCIPerrorlog.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cuid=TENV&cusrvr=cupid",
                            "target": "target='Main'",
                            "order": 3
                        }
                    ]
                },
                {
                    "label": "About AGent",
                    "url": "http://localhost/AGent/aboutpage.asp?guid=4b910b00-786b-11e7-88a1-cf53b770c10a&cusrvr=cupid&cuid=TENV",
                    "target": "target='Main'",
                    "order": 35,
                    "subItems": null
                },
                {
                    "label": "AGent News",
                    "url": "http://localhost/techsupp/agent/news/news.html?",
                    "target": "target='Main'",
                    "order": 36,
                    "subItems": null
                },
                {
                    "label": "User Guides",
                    "url": "http://localhosthttp://www5.auto-graphics.com/folder2",
                    "target": "target='Main'",
                    "order": 37,
                    "subItems": null
                }
            ]
        }
    ],
    "status": "ok",
    "message": "success"
}







  constructor() { }

  ngOnInit() {
    console.log(this.StaffList);
  }

}
