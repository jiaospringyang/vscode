import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductContainerComponent, ConfirmOrderComponent } from "./component";

const routes: Routes = [
  {
    path: "products",
    children: [
      {
        path: ":productId",
        component: ProductContainerComponent
      }
    ]
  },
  {
    path: "order/confirm",
    component: ConfirmOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
