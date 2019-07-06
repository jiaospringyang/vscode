import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { GroupOrder } from "../../domain";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-short-list",
  templateUrl: "./product-short-list.component.html",
  styleUrls: ["./product-short-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductShortListComponent implements OnInit {
  @Input() productList: GroupOrder[];
  @Input() row = 2;
  constructor() { }

  ngOnInit() {
    this.productList = [
      {
        id: 1,
        productId: 2,
        startBy: "zhangsan",
        avatar: "/assets/avatars/avatar001.png",
        startAt: new Date(),
        remainingNumber: 2
      },
      {
        id: 2,
        productId: 2,
        startBy: "lisi",
        avatar: "/assets/avatars/avatar002.png",
        startAt: new Date(2019, 10, 2),
        remainingNumber: 1
      }
    ]
  }

}
