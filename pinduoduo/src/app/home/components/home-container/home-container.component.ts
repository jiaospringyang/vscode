import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeService } from "../../home.service";
import { Observable } from "rxjs";

export interface TopMenu {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.css"]
})
export class HomeContainerComponent implements OnInit {
  barBackgraoundColor = "#fff";
  items$: Observable<TopMenu[]>;

  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(): void {
    this.items$ = this.homeService.getTabs();
  }

  handleTabItem(selectTab: TopMenu) {
    this.router.navigate(["home", selectTab.link]);
  }
}
