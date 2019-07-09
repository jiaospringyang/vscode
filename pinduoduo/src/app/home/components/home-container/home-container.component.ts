import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from "../../home.service";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

export interface TopMenu {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  barBackgraoundColor = "#fff";
  items$: Observable<TopMenu[]>;
  selectedTabLink$: Observable<string>;

  constructor(private router: Router, private route: ActivatedRoute, private homeService: HomeService) {}

  ngOnInit(): void {
    this.items$ = this.homeService.getTabs();
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter((params) => params.has("tabLink")),
      map((params) => params.get("tabLink"))
    );
  }

  handleTabItem(selectTab: TopMenu) {
    this.router.navigate(["home", selectTab.link]);
  }
}
