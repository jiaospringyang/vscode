import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { FootMenu } from "src/app/share/components";
import { ActivatedRoute, Router } from "@angular/router";
import { DialogService } from "src/app/dialog/services";
import { ProductVariant } from "../../domain";
import { ProductVariantComponent } from "../product-variant";

@Component({
  selector: "app-product-menu",
  templateUrl: "./product-menu.component.html",
  styleUrls: ["./product-menu.component.css"]
})
export class ProductMenuComponent implements OnInit {
  @Input() selectedIndex: number;
  @Input() productVariants: ProductVariant[] = [];

  productMenuTabs: FootMenu[] = [
    {
      icon: "/assets/icons/more.png",
      activeIcon: "/assets/icons/more.png",
      title: "更多",
      link: "more"
    },
    {
      icon: "/assets/icons/favorite.png",
      activeIcon: "/assets/icons/favorite.png",
      title: "收藏",
      link: "favorite"
    },
    {
      icon: "/assets/icons/customer-service.png",
      activeIcon: "/assets/icons/customer-service.png",
      title: "客服",
      link: "customer-service"
    }
  ];

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  toggleProductMenu(evt: any) {
    console.log(evt);
  }

  handleBuy() {}

  handleGroupBuy() {
    const top = 40;
    const formSubmit = new EventEmitter();
    formSubmit.subscribe((event) => {
      this.dialogService.saveData(event);
      this.router.navigate(["/order/confirm"]);
    });

    const selected = new EventEmitter();
    selected.subscribe((evt) => {
       this.selectedIndex = evt;
    });

    this.dialogService.open(
      {
        inputs: {
          productVariants: this.productVariants,
          selectedVariantIndex: this.selectedIndex
        },
        outputs: {
          formSubmit,
          selected
        },
        dialogPos: {
          top: `${top}%`,
          left: "0",
          width: "100%",
          height: `${100 - top}%`
        }
      },
      ProductVariantComponent
    );
  }
}
