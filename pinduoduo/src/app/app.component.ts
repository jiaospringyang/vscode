import { Component } from "@angular/core";
import { FootMenu } from "./share/components";
import { Observable } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  selectedIndex$: Observable<number>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.selectedIndex$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((evt: NavigationEnd) => {
        const path = evt.url.split("/");
        return path.length === 0 ? "home" : path[0];
      }),
      map((path) => this.getPathIndex(path))
    );
  }

  changeTabMenu(footMenu: FootMenu) {
    this.router.navigate([footMenu.link]);
  }

  private getPathIndex(path: string) {
    return path === "category"
      ? 1
      : path === "recommend"
      ? 2
      : path === "chat"
      ? 3
      : path === "my"
      ? 4
      : 0;
  }
}
