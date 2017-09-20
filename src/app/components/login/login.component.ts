import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../../services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form:FormGroup;
  public userID:AbstractControl;
  public password:AbstractControl;
  public cid:AbstractControl;
  public lid:AbstractControl;
  public submitted:boolean = false;  
  public errorMessage = "";
  //public loginText:LoginText;
  @Input() loginText:any;

//, private authenticationService:BaAuthenticationService
  constructor(fb:FormBuilder, private router:Router, private tokenService:TokenService) {
    this.form = fb.group({
      'userID':  ['', ''],
      'password': ['', ''],
      'lid': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'cid': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
    this.cid = this.form.controls['cid'];
    this.lid = this.form.controls['lid'];

    this.userID = this.form.controls['userID'];
    this.password = this.form.controls['password'];
  }

  public ngOnInit(){
    //this.loginText = new LoginText();
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {      
      this.tokenService.fetchToken(this.buildLoginData());
      this.router.navigateByUrl('/body');
      // your code goes here
      // console.log(values);
      //this.authenticationService.Authenticate(this.buildLoginData());//.subscribe((res) => console.log(res), error=>console.log(error));
      //this.authenticationService.IsAuthenticated().subscribe(res => this.redirectWhenSuccessful(res), error => this.errorHandle(error));
    }
  }

  private buildLoginData(){
    let result = {
      "cid": this.cid.value,
      "lid": this.lid.value,
      "username": this.userID.value,
      "password": this.password.value
    };
    return result;
  }

}
