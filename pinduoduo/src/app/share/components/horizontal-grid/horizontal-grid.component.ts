import { Component, OnInit, Input } from "@angular/core";
import { Emoji, Confirmation } from "../../decorector";

@Component({
  selector: "app-horizontal-grid",
  templateUrl: "./horizontal-grid.component.html",
  styleUrls: ["./horizontal-grid.component.css"]
})
export class HorizontalGridComponent implements OnInit {
  // @Emoji() emotion = "hello";
  @Input() displayCol = 5;
  @Input() cols = 8;
  @Input() girdTitle = false;
  sliderMargin = "0";


  constructor() { }

  ngOnInit() {
  }

  public get scrollable(): boolean {
    return this.displayCol < this.cols;
  }

  get templateRows(): string {
    return `minmax(auto, max-content)`;
  }

  get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCol * 0.4}rem) / ${this.displayCol})`;
  }

  handleScroll(ev) {
    this.sliderMargin = `0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth}%`;
  }

  // @Confirmation("你确认要继续执行吗")
  // handleClick() {
  //    console.log("结果已执行");
  // }
}
