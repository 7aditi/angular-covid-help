import { Component, Input, OnInit } from "@angular/core";
import "jquery";
import "popper.js";
import "bootstrap";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationBarComponent implements OnInit {

  isOpen = false;

  ngOnInit() {
    this.getData();
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  getData() {}
}
