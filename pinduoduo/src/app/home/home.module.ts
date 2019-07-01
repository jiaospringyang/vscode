import { NgModule } from "@angular/core";

import { ShareModule } from "../share/share.module";
import { HomeContainerComponent } from "./components/home-container";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeDetailComponent, HomeGrandComponent, AuxComponent, ParentComponent, ChildComponent } from "./components";
import { HomeService } from "./home.service";
import { token } from "../share/components";

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    AuxComponent,
    ParentComponent,
    ChildComponent
  ],
  providers: [HomeService,
  {
    provide: token,
    useValue: "localhost:dev"
  }
  ],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
