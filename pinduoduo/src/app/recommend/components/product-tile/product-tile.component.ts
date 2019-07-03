import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/share/components";

@Component({
  selector: "app-product-tile",
  templateUrl: "./product-tile.component.html",
  styleUrls: ["./product-tile.component.css"]
})
export class ProductTileComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
