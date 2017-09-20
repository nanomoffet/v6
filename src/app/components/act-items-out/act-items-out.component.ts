import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'act-items-out',
  templateUrl: './act-items-out.component.html',
  styleUrls: ['./act-items-out.component.css']
})
export class ActItemsOutComponent implements OnInit {


 private ItemsOut = 
 {
    "data": {
        "agItems": {
            "totalItems": 4,
            "RenewAllApi": {
                "url": "/v1/accounts/customer/swls/library/platt/ItemsOut",
                "method": "PUT"
            },
            "SortApi": {
                "url": "/v1/accounts/customer/swls/library/platt/ItemsOut?sortBy=Date Out",
                "method": "GET",
                "available_sorted_fields": [
                    "Author",
                    "Title",
                    "Status",
                    "Date Out",
                    "Date Due",
                    "Call Number"
                ]
            },
            "items": [
                {
                    "HoldingsID": 337122,
                    "Title": "The Addams family",
                    "Author": "Brooks, Albert, 1947-",
                   "Barcode": "39896008260230",
                    "CallNumber": "VT Add",
                    "Fine": "5",
                    "IsDueDatePassed": true,
                    "DueDateDisplay": "6/27/2014",
                    "ItemLibPK": 9405,
                    "CanRenew": false,
                    "RenewedAlreadyCount": 4,
                    "RenewStatusDisplay": "Renewed: 4 of 1 | Over Limit | Overdue",
                    "ShowILLLink": false,
                    "IllRequestID": 0,
                    "IllCurrStatus": "",
                    "RenewCheckedByDefault": false,
                    "CheckoutLPK": 0,
                    "CheckoutLibName": "",
                    "RenewLimit": 1,
                    "IsTitleOrHldReserved": false,
                    "CanPatronDeleteReserve": true,
                    "DateSetStr": "6/20/2014 12:47:47 PM",
                    "Enum": "",
                    "Chron": "",
                    "AGControlId": 42589,
                    "ISBN": {
                        "string": [
                            "1419828940"
                        ]
                    },
                    "UPC": "",
                    "OCLC": "",
                    "vendorId": "AG"
                },
                {
                    "HoldingsID": 54159,
                    "Title": "The cattle baron",
                    "Author": "Valentine, John.",
                    "Barcode": "39896002180632",
                    "CallNumber": "LTE Lad",
                    "Fine": "0",
                    "IsDueDatePassed": true,
                    "DueDateDisplay": "4/2/2015",
                    "ItemLibPK": 9388,
                    "CanRenew": true,
                    "RenewedAlreadyCount": 0,
                    "RenewStatusDisplay": "",
                    "ShowILLLink": false,
                    "IllRequestID": 0,
                    "IllCurrStatus": "",
                    "RenewCheckedByDefault": true,
                    "CheckoutLPK": 0,
                    "CheckoutLibName": "",
                    "RenewLimit": 2,
                    "IsTitleOrHldReserved": false,
                    "CanPatronDeleteReserve": true,
                    "DateSetStr": "3/19/2015 5:17:25 PM",
                    "Enum": "",
                    "Chron": "",
                    "AGControlId": 38100,
                    "ISBN": {
                        "string": [
                            "1554070872 :"
                        ]
                    },
                    "UPC": "",
                    "OCLC": "",
                    "vendorId": "AG",
                    "customSortField_title": "The cattle baron",
                    "customSortField_author": "Valentine, John.",
                    "customSortField_status": true,
                    "customSortField_dateOut": "3/19/2015 5:17:25 PM",
                    "customSortField_dueDate": "4/2/2015",
                    "customSortField_callNumber": "LTE Lad",
                    "RenewItemApi": {
                        "url": "/v1/accounts/customer/swls/library/platt/ItemsOut",
                        "method": "POST",
                        "postData": "{'holdingId':54159}"
                    }
                },
                {
                    "HoldingsID": 337125,
                    "Title": "Men don't leave",
                    "Author": "Collard, Sneed B.",
                    "Barcode": "39896004298648",
                    "CallNumber": "VT Men",
                    "Fine": "5",
                    "IsDueDatePassed": true,
                    "DueDateDisplay": "6/26/2014",
                    "ItemLibPK": 9405,
                    "CanRenew": false,
                    "RenewedAlreadyCount": 3,
                    "RenewStatusDisplay": "Renewed: 3 of 1 | Over Limit | Overdue",
                    "ShowILLLink": false,
                    "IllRequestID": 0,
                    "IllCurrStatus": "",
                    "RenewCheckedByDefault": false,
                    "CheckoutLPK": 0,
                    "CheckoutLibName": "",
                    "RenewLimit": 1,
                    "IsTitleOrHldReserved": false,
                    "CanPatronDeleteReserve": true,
                    "DateSetStr": "6/19/2014 4:47:08 PM",
                    "Enum": "",
                    "Chron": "",
                    "AGControlId": 28630,
                    "ISBN": {
                        "string": [
                            "0395953170"
                        ]
                    },
                    "UPC": "",
                    "OCLC": "",
                    "vendorId": "AG"
                },
                {
                    "HoldingsID": 337120,
                    "Title": "Robin Hood--prince of thieves",
                    "Author": "Hunter, Ryan Ann.",
                    "Barcode": "39896007850601",
                    "CallNumber": "VT Rob",
                    "Fine": "5",
                    "IsDueDatePassed": true,
                    "DueDateDisplay": "6/25/2014",
                    "ItemLibPK": 9405,
                    "CanRenew": false,
                    "RenewedAlreadyCount": 2,
                    "RenewStatusDisplay": "Renewed: 2 of 1 | Over Limit | Overdue",
                    "ShowILLLink": false,
                    "IllRequestID": 0,
                    "IllCurrStatus": "",
                    "RenewCheckedByDefault": false,
                    "CheckoutLPK": 0,
                    "CheckoutLibName": "",
                    "RenewLimit": 1,
                    "IsTitleOrHldReserved": false,
                    "CanPatronDeleteReserve": true,
                    "DateSetStr": "6/18/2014 10:00:05 AM",
                    "Enum": "",
                    "Chron": "",
                    "AGControlId": 5632,
                    "ISBN": {
                        "string": [
                            "0792251202"
                        ]
                    },
                    "UPC": "",
                    "OCLC": "",
                    "vendorId": "AG"
                }
            ]
        },
        "odItems": [],
        "zinioItems": [],
        "rbItems": []
    },
    "status": "ok",
    "message": "success"
}



  constructor() { }

  ngOnInit() {
  }

}
