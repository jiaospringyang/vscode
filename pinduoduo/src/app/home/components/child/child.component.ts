import { Component, OnInit, NgZone, AfterViewChecked, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { formatDate } from '@angular/common';

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, AfterViewChecked {
  @ViewChild("timeRef", {static: true}) timeRef: ElementRef;
  title: string;
  time: number;
  constructor(private zone: NgZone, private rd2: Renderer2) {}

  ngOnInit() {
    this.title = "hi";
    this.time = Date.now();
  }

  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.title = "你好";
        this.time = Date.now();
        // this.timeRef.nativeElement.innerHTML = Date.now();
        this.rd2.setProperty(this.timeRef.nativeElement, "innerText", formatDate(Date.now(), "HH:mm:ss:SSS", "zh-Hans"));
      }, 100);
    });
  }

  handleDetection(event: any) {}
}
