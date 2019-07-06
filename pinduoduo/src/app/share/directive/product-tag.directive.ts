import { Directive, Input, HostBinding } from "@angular/core";

@Directive({
  selector: "[appProductTag]"
})
export class ProductTagDirective {
  @Input() @HostBinding("style.background-color") tagBgColor = "#fff";
  @Input() @HostBinding("style.color") tagColor = "#ca516a";
  @Input() @HostBinding("style.font-size") tagFontSize = "0.8rem";
  @Input() @HostBinding("style.padding") tagPadding = "3px";
  @Input() @HostBinding("style.border-radius") tagRadius = "0";
}
