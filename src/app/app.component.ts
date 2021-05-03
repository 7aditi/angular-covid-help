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
  title = 'bharatAid';


  url_city = 'https://docs.google.com/spreadsheets/d/10dlb3LJ9x5CtUgMQGTupTcpQRoS_cclpfCA6YDLUSLY/edit#';
  gid = 'gid=1562230121';
  gidList = [{name: 'Oxygen Cylinder', gid: 'gid=1562230121'},
  {name: 'Oxygen Concentrators', gid: 'gid=69755716'},
  {name: 'Hospital Oxygen Beds', gid: 'gid=700865304'},
  {name: 'ICU and Ventilator', gid: 'gid=1415697092'},
  {name: 'Remidisvir', gid: 'gid=1545067565'},
  {name: 'Tocilizumab', gid: 'gid=1149996940'},
  {name: 'Plasma Centers', gid: 'gid=1644043701'},
  {name: 'Home Oxygen Beds', gid: 'gid=822783878'},
  {name: 'Home Hospital Bed Set Up', gid: 'gid=401667408'},
  {name: 'Home Quarantine Expertise', gid: 'gid=749255842'},
  {name: 'Doctors', gid: 'gid=338143185'},
  {name: 'Diagnostic Labs', gid: 'gid=1836744924'},
  {name: 'Food', gid: 'gid=1909887876'}];

  city = 'Delhi';

  gidListDelhi = [{name: 'Oxygen Cylinder', gid: 'gid=1562230121'},
  {name: 'Oxygen Concentrators', gid: 'gid=69755716'},
  {name: 'Hospital Oxygen Beds', gid: 'gid=700865304'},
  {name: 'ICU and Ventilator', gid: 'gid=1415697092'},
  {name: 'Remidisvir', gid: 'gid=1545067565'},
  {name: 'Tocilizumab', gid: 'gid=1149996940'},
  {name: 'Plasma Centers', gid: 'gid=1644043701'},
  {name: 'Home Oxygen Beds', gid: 'gid=822783878'},
  {name: 'Home Hospital Bed Set Up', gid: 'gid=401667408'},
  {name: 'Home Quarantine Expertise', gid: 'gid=749255842'},
  {name: 'Doctors', gid: 'gid=338143185'},
  {name: 'Diagnostic Labs', gid: 'gid=1836744924'},
  {name: 'Food', gid: 'gid=1909887876'}
];

  form: FormGroup;
  cities = [{ name: 'Mumbai'},
  { name: 'Chennai'},
  { name: 'Bengaluru'},
  { name: 'Pune'}];
  defaultCity = 'Delhi';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      cities: ['']
    });

    this.cities = this.getCities();
  }

  getCities() {
    return [
      // { id: '0', name: 'Mumbai' , url: ''},
      { name: 'Mumbai'},
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
        this.url_city = 'https://docs.google.com/spreadsheets/d/10dlb3LJ9x5CtUgMQGTupTcpQRoS_cclpfCA6YDLUSLY/edit?usp=sharing'
        this.gidList = this.gidListDelhi;
        console.log(this.city)
        break;
      }
    }
  }
}
