import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DialogCloseDirective } from "./directives";
import { DialogContainerComponent } from "./components";

@NgModule({
    imports: [CommonModule],
    declarations: [DialogContainerComponent, DialogCloseDirective],
    exports: [DialogContainerComponent, DialogCloseDirective]
  })
  export class DialogModule {}
