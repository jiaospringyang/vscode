import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ProductVariant } from "../../domain";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "../../services/order.service";
import { map, filter, switchMap } from "rxjs/operators";

@Component({
  selector: "app-product-container",
  templateUrl: "./product-container.component.html",
  styleUrls: ["./product-container.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {
  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter((params) => params.has("productId")),
      map((params) => params.get("productId"))
    );

    this.variants$ = productId$.pipe(
      switchMap((productId) => this.orderService.getProductVariant(productId))
    );
  }
}
