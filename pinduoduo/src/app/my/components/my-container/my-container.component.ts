import { Component, OnInit } from "@angular/core";
import { GridItem } from "src/app/home/home.service";
import { Profile } from "../../domain";
import { Observable } from "rxjs";
import { MyService } from "../../services/my.service";

@Component({
  selector: "app-my-container",
  templateUrl: "./my-container.component.html",
  styleUrls: ["./my-container.component.css"]
})
export class MyContainerComponent implements OnInit {
  profile$: Observable<Profile[]>;
  orderContents: GridItem[] = [
    {
      id: 0,
      icon: "assets/icons/coupon.png",
      link: "#",
      title: "去付款"
    },
    {
      id: 1,
      icon: "assets/icons/fav_product.png",
      link: "#",
      title: "商品收藏"
    },
    {
      id: 2,
      icon: "assets/icons/fav_store.png",
      link: "#",
      title: "店铺收藏"
    },
    {
      id: 3,
      icon: "assets/icons/history.png",
      link: "#",
      title: "历史浏览"
    },
    {
      id: 4,
      icon: "assets/icons/refund.png",
      link: "#",
      title: "退款售后"
    },
  ];
  constructor(private myService: MyService) { }

  ngOnInit() {
    this.profile$ = this.myService.getProfile();
  }

}
