import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeContainerComponent } from ".";
import {
  HomeGrandComponent,
  HomeDetailComponent,
  AuxComponent,
  ParentComponent
} from "./components";

const routes: Routes = [
  {
    path: "home",
    component: HomeContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "hot",
        pathMatch: "full"
      },
      {
        path: ":tabLink",
        component: HomeDetailComponent,
        children: [
          {
            path: "aux",
            component: AuxComponent,
            outlet: "second"
          },
          {
            path: "grand",
            component: HomeGrandComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
