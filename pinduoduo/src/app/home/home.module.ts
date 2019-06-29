import { NgModule } from "@angular/core";

import { ShareModule } from "../share/share.module";
import { HomeContainerComponent } from "./components/home-container";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeDetailComponent, HomeGrandComponent } from "./components";

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent
  ],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
