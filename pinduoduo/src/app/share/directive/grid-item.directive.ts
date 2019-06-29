import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appGridItem]"
})
export class GridItemDirective {
  @HostBinding("style.display") @Input() display = "grid";
  @HostBinding("style.grid-template-areas") @Input() template = `"image" "title"`;
  @HostBinding("style.place-items") @Input() place = "center";
  @HostBinding("style.width") @Input() width = "4.6rem";
  // @Input() gridItemImageSize = "4rem";

  // constructor(private ler: ElementRef, private rd2: Renderer2) {
  // }

  // ngOnInit(): void {
  //   this.rd2.setStyle(this.ler.nativeElement, "display", "grid");
  //   this.rd2.setStyle(this.ler.nativeElement, "grid-template-areas", `"image" "title"`);
  //   this.rd2.setStyle(this.ler.nativeElement, "place-items", "center");
  //   this.rd2.setStyle(this.ler.nativeElement, "width", this.gridItemImageSize);
  // }
}
