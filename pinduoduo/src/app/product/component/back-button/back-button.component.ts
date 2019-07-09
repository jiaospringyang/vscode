import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-back-button",
  templateUrl: "./back-button.component.html",
  styleUrls: ["./back-button.component.css"]
})
export class BackButtonComponent implements OnInit {
  @Input() imageBackground = true;
  @Input() inline = "inline-block";
  constructor(private location: Location) { }

  ngOnInit() {
  }

  get imageUrl() {
    return this.imageBackground ? "/assets/icons/back_light.png" : "/assets/icons/back_dark.png";
  }

  handleBack() {
    this.location.back();
  }
}
