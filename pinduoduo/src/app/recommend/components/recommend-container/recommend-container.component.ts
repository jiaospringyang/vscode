import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/share/components";
import { filter, map, switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { HomeService } from "src/app/home/home.service";

@Component({
  selector: "app-recommend-container",
  templateUrl: "./recommend-container.component.html",
  styleUrls: ["./recommend-container.component.css"]
})
export class RecommendContainerComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.products$ = this.homeService.getProducts();
  }
}
