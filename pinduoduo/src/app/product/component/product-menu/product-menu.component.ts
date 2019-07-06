import { Component, OnInit, Input } from "@angular/core";
import { FootMenu } from "src/app/share/components";

@Component({
  selector: "app-product-menu",
  templateUrl: "./product-menu.component.html",
  styleUrls: ["./product-menu.component.css"]
})
export class ProductMenuComponent implements OnInit {
  @Input() selectedId: number;
  @Input() nowPrice: number;
  @Input() priceList: number;
  productMenuTabs: FootMenu[] = [
    {
      icon: "/assets/icons/more.png",
      activeIcon: "/assets/icons/more.png",
      title: "更多",
      link: "more"
    },
    {
      icon: "/assets/icons/favorite.png",
      activeIcon: "/assets/icons/favorite.png",
      title: "收藏",
      link: "favorite"
    },
    {
      icon: "/assets/icons/customer-service.png",
      activeIcon: "/assets/icons/customer-service.png",
      title: "客服",
      link: "customer-service"
    }
  ];
  constructor() {}

  ngOnInit() {}

  toggleProductMenu(evt: any) {
    console.log(evt);
  }
}
