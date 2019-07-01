import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { ImageSlider } from "src/app/share/components";
import { ActivatedRoute } from "@angular/router";
import { HomeService } from "../../home.service";
import { token } from "src/app/share/components";

@Component({
  selector: "app-home-detail",
  templateUrl: "./home-detail.component.html",
  styleUrls: ["./home-detail.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  tabLink = "hot";
  grids = [];

  imageSliders: ImageSlider[] = [];

  constructor(private route: ActivatedRoute, private homeService: HomeService,
              @Inject(token) private baseUrl: string, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
       this.tabLink = params.get("tabLink");
       this.cdr.markForCheck();
    });
    this.route.queryParamMap.subscribe((params) => {
     // console.log("查询", params);
   });

    this.grids = this.homeService.getGrids();
    this.imageSliders = this.homeService.getImageSlides();
    console.log("baseUrl", this.baseUrl);
  }
}
