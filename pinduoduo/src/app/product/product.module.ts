import { NgModule } from "@angular/core";

import { ProductRoutingModule } from "./product-routing.module";
import { ShareModule } from "../share/share.module";
import {
  ProductContainerComponent,
  BackButtonComponent,
  ProductItemComponent,
  ProductShortListComponent,
  ProductMenuComponent
} from "./component";

@NgModule({
  declarations: [
    ProductContainerComponent,
    BackButtonComponent,
    ProductItemComponent,
    ProductShortListComponent,
    ProductMenuComponent
  ],
  imports: [ShareModule, ProductRoutingModule]
})
export class ProductModule {}
