import { Routes, RouterModule } from "@angular/router";
import { NgModule, Component } from "@angular/core";

import { HomeContainerComponent, HomeDetailComponent } from "./home";

const routes: Routes = [
    {
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }
      ];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
