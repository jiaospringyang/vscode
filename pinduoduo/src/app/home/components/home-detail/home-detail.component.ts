import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { ImageSlider, Ads, Product } from "src/app/share/components";
import { ActivatedRoute } from "@angular/router";
import { HomeService, GridItem } from "../../home.service";
import { token } from "src/app/share/components";
import { Observable } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { async } from '@angular/core/testing';

@Component({
  selector: "app-home-detail",
  templateUrl: "./home-detail.component.html",
  styleUrls: ["./home-detail.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  tabLink = "hot";
  grids$: Observable<GridItem[]>;
  selectedLinkTab$: Observable<string>;
  imageSliders$: Observable<ImageSlider[]>;
  ad$: Observable<Ads>;
  products$: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    @Inject(token) private baseUrl: string,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.selectedLinkTab$ = this.route.paramMap.pipe(
      filter((params) => params.has("tabLink")),
      map((params) => params.get("tabLink"))
    );
    // .subscribe((params) => {
    //   this.tabLink = params.get("tabLink");
    //   this.cdr.markForCheck();
    // });

    // this.route.queryParamMap.subscribe(params => {
    //   // console.log("查询", params);
    // });

    this.grids$ = this.homeService.getGrids();
    // this.homeService.getGrids().subscribe((grids) => {
    //   this.grids = grids;
    //   this.cdr.markForCheck();
    // });
    this.imageSliders$ = this.homeService.getImageSlides();
    // this.homeService.getImageSlides().subscribe((imageSliders) => {
    //   this.imageSliders = imageSliders;
    //   this.cdr.markForCheck();
    // });
    this.ad$ = this.selectedLinkTab$.pipe(
      switchMap((tab) => this.homeService.getAds(tab)),
      filter((ads) => ads.length > 0),
      map((ads) => ads[0])
    );

    this.products$ = this.selectedLinkTab$.pipe(
      switchMap((tab) => this.homeService.getProducts(tab))
    );
  }
}
