import { Routes, RouterModule } from "@angular/router";
import { NgModule, Component } from "@angular/core";

import { HomeContainerComponent, HomeDetailComponent } from "./home";

const routes: Routes = [
    {
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }
    // { path: "home",
    //   component: HomeContainerComponent
    // }
      // children: [
      //   {
      //       path: "",
      //       redirectTo: "hot",
      //       pathMatch: "full"
      //   },
      //   {
      //     path: "hot",
      //     component: HomeDetailComponent
        // }
        // {
        //     path: ":tabLink",
        //     component: HomeDetailComponent
        // }
      ];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
