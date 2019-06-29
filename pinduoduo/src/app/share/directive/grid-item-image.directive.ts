import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appGridItemImage]"
})
export class GridItemImageDirective {
  @HostBinding("style.grid-area") area = "image";
  @HostBinding("style.object-fit") @Input() fit = "cover";
  @HostBinding("style.width") @Input() width = "3rem";
  @HostBinding("style.height") @Input() height = "3rem";
  // @Input() fitMode = "cover";
  // @Input() gridItemImage = "4rem";
  // constructor(private ler: ElementRef, private rd2: Renderer2) { }

  // ngOnInit(): void {
  //   this.rd2.setStyle(this.ler.nativeElement, "grid-area", "image");
  //   this.rd2.setStyle(this.ler.nativeElement, "object-fit", this.fitMode);
  //   this.rd2.setStyle(this.ler.nativeElement, "width", this.gridItemImage);
  //   this.rd2.setStyle(this.ler.nativeElement, "height", this.gridItemImage);
  // }
}
