import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeContainerComponent } from ".";
import { HomeGrandComponent, HomeDetailComponent } from "./components";

const routes: Routes = [
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
           path: "grand",
           component: HomeGrandComponent
         }
      ]
    }
    // {
    //   path: "**",
    //   component: PageNotFoundComponent
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
