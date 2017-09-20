import { Component, OnInit } from '@angular/core';
import { SearchIndexService, SearchService, SearchQuery, TokenService } from '../../services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'act-profile',
  templateUrl: './act-profile.component.html',
  styleUrls: ['./act-profile.component.css']
})
export class ActProfileComponent implements OnInit {
    profileInfo:any;
    results: string[];


  constructor(private http: HttpClient, private tokenService:TokenService) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:3001/v1/accounts/customer/tenv/library/tenv2/user/236822/getprofile').subscribe(data => {
    // Read the result field from the JSON response.
    this.results = data['results'];
    console.log('profile results');
    console.log(this.results);
    });

/*
  private getProfile = {
    "data": {
        "userId": 106,
        "locale": "english",
        "twoWayTextEnabled": false,
        "updateApi": {
            "url": "/v1/accounts/customer/tenv/library/tenv2/user/236822/saveProfile",
            "postData": "json",
            "method": "post"
        },
        "fields": [
            {
                "name": "password",
                "value": "ch0c0late",
                "editable": true,
                "required": true,
                "type": "password",
                "listFields": []
            },
            {
                "name": "firstname",
                "value": "Auto-Graphics",
                "editable": false,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "initial",
                "value": " ",
                "editable": false,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "lastname",
                "value": "Administrator",
                "editable": false,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "address1",
                "value": "3201 Temple Ave.",
                "editable": false,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "address2",
                "value": " ",
                "editable": false,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "city",
                "value": "Pomona",
                "editable": false,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "state",
                "value": "CA",
                "editable": false,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "zip",
                "value": "91768-3279",
                "editable": false,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "email",
                "value": "no-reply@auto-graphics.com",
                "editable": false,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "phone",
                "value": "800-852-8686",
                "editable": false,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "mobilephone",
                "value": " ",
                "editable": true,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "notificationpreferences",
                "value": {
                    "name": "Email",
                    "index": "1"
                },
                "editable": false,
                "required": false,
                "type": "list",
                "listFields": [
                    {
                        "name": "None",
                        "index": "0"
                    },
                    {
                        "name": "Email",
                        "index": "1"
                    },
                    {
                        "name": "Paper",
                        "index": "2"
                    },
                    {
                        "name": "Phone",
                        "index": "3"
                    }
                ]
            },
            {
                "name": "reservenotificationpreferences",
                "value": {
                    "name": "Email",
                    "index": "1"
                },
                "editable": false,
                "required": false,
                "type": "list",
                "listFields": [
                    {
                        "name": "None",
                        "index": "0"
                    },
                    {
                        "name": "Email",
                        "index": "1"
                    },
                    {
                        "name": "Paper",
                        "index": "2"
                    },
                    {
                        "name": "Phone",
                        "index": "3"
                    }
                ]
            },
            {
                "name": "ldf6",
                "value": " ",
                "editable": true,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "ldf9",
                "value": " ",
                "editable": true,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "ldf8",
                "value": " ",
                "editable": true,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "phone2",
                "value": " ",
                "editable": true,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "nickname",
                "value": "",
                "editable": true,
                "required": false,
                "type": "text",
                "listFields": []
            },
            {
                "name": "notificationday",
                "value": {
                    "name": "NO",
                    "index": "NO"
                },
                "editable": true,
                "required": false,
                "type": "list",
                "listFields": [
                    {
                        "name": "NO",
                        "index": "NO"
                    },
                    {
                        "name": "SUNDAY",
                        "index": "SUNDAY"
                    },
                    {
                        "name": "MONDAY",
                        "index": "MONDAY"
                    },
                    {
                        "name": "TUESDAY",
                        "index": "TUESDAY"
                    },
                    {
                        "name": "WEDNESDAY",
                        "index": "WEDNESDAY"
                    },
                    {
                        "name": "THURSDAY",
                        "index": "THURSDAY"
                    },
                    {
                        "name": "FRIDAY",
                        "index": "FRIDAY"
                    },
                    {
                        "name": "SATURDAY",
                        "index": "SATURDAY"
                    }
                ]
            }
        ]
    },
    "status": "ok",
    "message": "success"
}
*/
}




}
