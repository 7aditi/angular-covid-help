import { Component, VERSION } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from "@angular/forms";

import "jquery";
import "popper.js";
import "bootstrap";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  url_city = 'https://towness.co.in/web/';
  gid = 'fruits-vegetables';
  gid_collection = [];
  city = 'Mumbai';

  form: FormGroup;
  cities = [];
  defaultCity = 'Mumbai';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      cities: ['']
    });

    this.cities = this.getCities();
  }

  getCities() {
    return [
      // { id: '0', name: 'Mumbai' , url: ''},
      { name: 'Chennai'},
      { name: 'Bengaluru'},
      { name: 'Pune'}
    ];
  }

/* Change URL's based on the city chosen */

  getURL(){
    switch(this.city){
      case 'Chennai': {
        this.url_city = 'https://stackoverflow.com/questions/45062093';
        this.gid = '/right-way-to-call-a-function-after-selected-option-angular-4';
        console.log(this.city);
        break;
      }
      case 'Bengaluru': {
        this.url_city = 'https://docs.angularjs.org/api/ng/directive/'
        this.gid = 'ngHref';
        console.log(this.city)
        break;
      }
      default: {
        this.url_city = 'Mumbai'
        console.log(this.city)
        break;
      }
    }
  }
  
}
