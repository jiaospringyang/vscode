import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  ScrollableTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent,
  CountDownComponent,
  TabMenuComponent,
  VerticalGridComponent,
  ProductCardComponent
} from "./components";
import { GridItemDirective } from "./directive/grid-item.directive";
import {
  GridItemImageDirective,
  GridItemTitleDirective,
  ProductTagDirective
} from "./directive";
import { AppAgoPipe } from "./pipes";
import { PriceAvatarDirective } from "./directive/price-avatar.directive";
import { DialogModule } from "../dialog";

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AppAgoPipe,
    TabMenuComponent,
    CountDownComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTagDirective,
    PriceAvatarDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AppAgoPipe,
    TabMenuComponent,
    CountDownComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTagDirective,
    PriceAvatarDirective,
    DialogModule
  ]
})
export class ShareModule {}
