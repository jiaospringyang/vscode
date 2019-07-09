import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  selectedIndex = 1;
  constructor() { }

  ngOnInit() {
  }

  handleClick(index: number) {
    this.selectedIndex = index;
  }
}
