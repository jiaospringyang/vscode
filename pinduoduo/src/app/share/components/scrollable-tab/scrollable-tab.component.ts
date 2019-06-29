import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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
  @Output() tabSelectedIndex = new EventEmitter<any>();
  title = "pinduoduo";
  selectedIndex = 0;

  constructor() {}

  ngOnInit() {}

  handleSelect(index: number) {
    this.selectedIndex = index;
    this.tabSelectedIndex.emit(this.items[index]);
  }
}
