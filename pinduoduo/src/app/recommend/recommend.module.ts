import { NgModule } from "@angular/core";

import { RecommendRoutingModule } from "./recommend-routing.module";
import { ShareModule } from "../share/share.module";
import { RecommendContainerComponent } from "./components/recommend-container/recommend-container.component";
import { ProductTagDirective } from "../share/directive";
import { ProductTileComponent } from "./components";

@NgModule({
  declarations: [
    RecommendContainerComponent,
    ProductTileComponent
  ],
  imports: [
    ShareModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule { }
