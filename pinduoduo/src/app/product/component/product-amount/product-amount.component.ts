import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-amount",
  templateUrl: "./product-amount.component.html",
  styleUrls: ["./product-amount.component.css"]
})
export class ProductAmountComponent implements OnInit {
  @Input() count: number;
  @Output() amountChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  countDecrease() {
    if (this.count <= 0) {
      return;
    }

    this.amountChanged.emit(--this.count);
  }

  countIncrease() {
    this.amountChanged.emit(++this.count);
  }
}
