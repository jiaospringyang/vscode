import { NgModule } from "@angular/core";

import { ProductRoutingModule } from "./product-routing.module";
import { ShareModule } from "../share/share.module";
import { ProductContainerComponent } from "./product/product-container";

@NgModule({
  declarations: [
    ProductContainerComponent
  ],
  imports: [
    ShareModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
