import { Component } from "@angular/core";
import { FootMenu } from "./share/components";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  changeTabMenu(footMenu: FootMenu) {
    console.log(footMenu);
  }
}
