import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {
    loginText:string;

    constructor(private router:Router) { 
    }

    ngOnInit() {
        this.loginText = "Login";
    }

    public onClick(){
        this.router.navigateByUrl('/body/template3');
    }
}
