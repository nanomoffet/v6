import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



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
