import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from "./components";
import { GridItemDirective } from "./directive/grid-item.directive";
import { GridItemImageDirective, GridItemTitleDirective } from './directive';

@NgModule({
   declarations: [
      ScrollableTabComponent,
      ImageSliderComponent,
      HorizontalGridComponent,
      GridItemDirective,
      GridItemImageDirective,
      GridItemTitleDirective
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
      GridItemTitleDirective
   ]
})
export class ShareModule { }
