import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FootMenu } from "..";

@Component({
  selector: "app-tab-menu",
  templateUrl: "./tab-menu.component.html",
  styleUrls: ["./tab-menu.component.css"]
})
export class TabMenuComponent implements OnInit {
  @Input() selectedId = 0;
  @Output() selectTabMenu = new EventEmitter<FootMenu>();
  displayCols = 5;
  cols = 5;
  menuTabs: FootMenu[] = [
    {
      icon: "/assets/tabs/home.png",
      activeIcon: "/assets/tabs/home_selected.png",
      title: "主页",
      link: "home"
    },
    {
      icon: "/assets/tabs/recommend.png",
      activeIcon: "/assets/tabs/recommend_selected.png",
      title: "推荐",
      link: "recommend"
    },
    {
      icon: "/assets/tabs/category.png",
      activeIcon: "/assets/tabs/category_selected.png",
      title: "搜索",
      link: "category"
    },
    {
      icon: "/assets/tabs/chat.png",
      activeIcon: "/assets/tabs/chat_selected.png",
      title: "聊天",
      link: "chat"
    },
    {
      icon: "/assets/tabs/my.png",
      activeIcon: "/assets/tabs/my_selected.png",
      title: "我的",
      link: "my"
    }
  ];
  constructor() {}

  ngOnInit() {}

  toggleMenu(tabIndex: number) {
    this.selectedId = tabIndex;
    this.selectTabMenu.emit(this.menuTabs[this.selectedId]);
  }
}
