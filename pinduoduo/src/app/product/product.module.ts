import { NgModule } from "@angular/core";

import { ProductRoutingModule } from "./product-routing.module";
import { ShareModule } from "../share/share.module";
import {
  ProductContainerComponent,
  BackButtonComponent,
  ProductItemComponent,
  ProductShortListComponent,
  ProductMenuComponent,
  ConfirmOrderComponent,
  ProductVariantComponent,
  ProductAmountComponent,
  PaymentComponent,
} from "./component";

@NgModule({
  declarations: [
    ProductContainerComponent,
    BackButtonComponent,
    ProductItemComponent,
    ProductShortListComponent,
    ProductMenuComponent,
    ConfirmOrderComponent,
    ProductVariantComponent,
    ProductAmountComponent,
    PaymentComponent
  ],
  imports: [ShareModule, ProductRoutingModule],
  entryComponents: [
    ProductVariantComponent
  ]
})
export class ProductModule {}
