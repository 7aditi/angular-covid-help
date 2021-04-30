import { Component} from "@angular/core";
import "jquery";
import "popper.js";
import "bootstrap";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})

export class FooterComponent{}