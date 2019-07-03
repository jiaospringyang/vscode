import { NgModule } from "@angular/core";

import { ChartRoutingModule } from "./chart-routing.module";
import { ShareModule } from "../share/share.module";
import { ChatContainerComponent } from "./components";

@NgModule({
  declarations: [
    ChatContainerComponent
  ],
  imports: [
    ShareModule,
    ChartRoutingModule
  ]
})
export class ChatModule { }
