import { Component, OnInit, Input } from "@angular/core";
import { GroupOrder } from "../../domain";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: GroupOrder;
  startDate: Date;
  futureDate: Date;
  constructor() { }

  ngOnInit() {
    this.startDate = this.productItem.startAt;
    this.futureDate = new Date(this.startDate.getTime() + 24 * 3600 * 1000);
  }

}
