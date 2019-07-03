import { NgModule } from "@angular/core";

import { MyRoutingModule } from "./my-routing.module";
import { ShareModule } from "../share/share.module";
import { MyContainerComponent } from "./components";

@NgModule({
  declarations: [
    MyContainerComponent
  ],
  imports: [
    ShareModule,
    MyRoutingModule
  ]
})
export class MyModule { }
