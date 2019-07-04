import { NgModule } from "@angular/core";

import { ProductRoutingModule } from "./product-routing.module";
import { ShareModule } from "../share/share.module";
import { ProductContainerComponent, BackButtonComponent } from "./component";

@NgModule({
  declarations: [
    ProductContainerComponent,
    BackButtonComponent
  ],
  imports: [
    ShareModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
