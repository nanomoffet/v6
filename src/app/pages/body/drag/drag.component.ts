import { Component, Input, ViewEncapsulation,  OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DragComponent implements OnInit {


  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  name:string = '';
  titleAlert:string = 'This field is required';


  constructor(private fb: FormBuilder) { 

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });

  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }




  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(

      (validate) => {

          if (validate == '1') {
              this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
              this.titleAlert = 'You need to specify at least 3 characters';
          } else {
              this.rForm.get('name').setValidators(Validators.required);
          }
          this.rForm.get('name').updateValueAndValidity();

      });
  }

}
