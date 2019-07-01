import { Routes, RouterModule } from "@angular/router";
import { NgModule, Component } from "@angular/core";

import { HomeContainerComponent, HomeDetailComponent, ParentComponent } from "./home";

const routes: Routes = [
    {
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }
    // {
    //   path: "value-detection",
    //   pathMatch: "full",
    //   component: ParentComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // {enableTracing: true}
    exports: [RouterModule]
})
export class AppRoutingModule {}
