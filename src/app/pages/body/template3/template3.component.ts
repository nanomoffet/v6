import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.css']
})
export class Template3Component implements OnInit {

test = {
    "Title":"Login",
    "Signup_link": "Sign-up",
    "CustomerID" : "Customer ID",
    "LibraryID" : "Library ID",
    "UserID" : "User ID",
    "Password": "Password",
    "Sign_in":  "Sign-in",
    "Forgot_password": "Forget Password"
  }


  constructor() { }

  ngOnInit() {
  }

}
