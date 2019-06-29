import { NgModule } from "@angular/core";

import { ChartRoutingModule } from "./chart-routing.module";
import { ShareModule } from "../share/share.module";

@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    ChartRoutingModule
  ]
})
export class ChatModule { }
