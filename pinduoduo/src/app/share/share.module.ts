import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent, CountDownComponent, TabMenuComponent } from "./components";
import { GridItemDirective } from "./directive/grid-item.directive";
import { GridItemImageDirective, GridItemTitleDirective } from "./directive";
import { AppAgoPipe } from "./pipes";

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
      CountDownComponent
   ],
   imports: [
      CommonModule,
      FormsModule
   ],
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
      CountDownComponent
   ]
})
export class ShareModule { }
