import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/compiler/src/core";

@Component({
  selector: "app-scrollable-tab",
  templateUrl: "./scrollable-tab.component.html",
  styleUrls: ["./scrollable-tab.component.css"]
})
export class ScrollableTabComponent implements OnInit {
  @Input() items: any;
  @Input() barBackgraoundColor = "white";
  @Input() fontColor = "black";
  @Input() fontActiveColor = "blue";
  @Input() indicatorColor = "red";
  @Input() selectedTabLink = "hot";
  @Output() tabSelectedIndex = new EventEmitter<any>();
  title = "pinduoduo";

  constructor() {}

  ngOnInit() {}

  handleSelect(index: number) {
    this.tabSelectedIndex.emit(this.items[index]);
  }
}
