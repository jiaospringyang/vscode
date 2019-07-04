import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-back-button",
  templateUrl: "./back-button.component.html",
  styleUrls: ["./back-button.component.css"]
})
export class BackButtonComponent implements OnInit {
  imageBackground = true;
  constructor() { }

  ngOnInit() {
  }

  get imageUrl() {
    return this.imageBackground ? "/assets/icons/back_light.png" : "/assets/icons/back_dark.png";
  }
}
