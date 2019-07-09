import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appGridItemTitle]"
})
export class GridItemTitleDirective {
  @HostBinding("style.grid-area") area = "title";
  @HostBinding("style.font-size") @Input() fontSize = "10px";
  // constructor(private ler: ElementRef, private rd2: Renderer2) { }

  // ngOnInit(): void {
  //   // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   // Add 'implements OnInit' to the class.
  //   // this.rd2.setStyle(this.ler.nativeElement, "grid-area", "title");
  //   // this.rd2.setStyle(this.ler.nativeElement, "font-size", "10px");
  // }
}
