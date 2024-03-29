import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FootMenu } from "./share/components";
import { Observable, of } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";
import { filter, map, switchMap } from "rxjs/operators";
import { DialogService } from "./dialog/services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  selectedIndex$: Observable<number>;

  constructor(private router: Router, private dialogService: DialogService) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.selectedIndex$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((evt: NavigationEnd) => {
        const path = evt.url.split("/");
        return path.length === 0 ? "home" : path[1];
      }),
      map((path) => this.getPathIndex(path))
    );
  }

  changeTabMenu(footMenu: FootMenu) {
    this.router.navigate([footMenu.link]);
  }

  private getPathIndex(path: string) {
    return path === "recommend"
      ? 1
      : path === "category"
      ? 2
      : path === "chat"
      ? 3
      : path === "my"
      ? 4
      : 0;
  }

  removeDialog() {
    this.dialogService.close();
  }
}
