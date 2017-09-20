import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {




  loginInfo = {
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
