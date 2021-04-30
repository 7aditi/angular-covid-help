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

  // form: FormGroup;
  // cities = [];

  // constructor(private formBuilder: FormBuilder) {
  //   this.form = this.formBuilder.group({
  //     cities: ['']
  //   });

  //   this.cities = this.getCities();
  // }

  // getCities() {
  //   return [
  //     { id: '1', name: 'Mumbai' },
  //     { id: '2', name: 'Chennai' },
  //     { id: '3', name: 'Bengaluru' },
  //     { id: '4', name: 'Pune' }
  //   ];
  // }
}
