import { Component } from "@angular/core";
import { Router } from "@angular/router";

interface TopMenu {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.css"]
})
export class HomeContainerComponent {
  barBackgraoundColor = "#fff";
  items: TopMenu[] = [
    { id: 0, title: "热门", link: "hot" },
    { id: 1, title: "男装", link: "men" },
    { id: 2, title: "百货", link: "department" },
    { id: 3, title: "运动", link: "sports" },
    { id: 4, title: "手机", link: "mobile" },
    { id: 5, title: "家纺", link: "home" },
    { id: 6, title: "食品", link: "foot" },
    { id: 7, title: "电器", link: "electric" },
    { id: 8, title: "鞋包", link: "shoe" },
    { id: 9, title: "汽水", link: "water" },
    { id: 10, title: "水果", link: "fruits" },
    { id: 11, title: "电脑", link: "compute" },
    { id: 12, title: "内衣", link: "underwear" },
    { id: 13, title: "家装", link: "decoration" },
    { id: 14, title: "母婴", link: "mom" },
    { id: 15, title: "美妆", link: "makeup" },
    { id: 16, title: "家具", link: "funiture" }
  ];

  constructor(private router: Router) {
  }

  handleTabItem(selectTab: TopMenu) {
    this.router.navigate(["home", selectTab.link]);
  }
}
