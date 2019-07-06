import {
  Component,
  OnInit,
  Input,
  ViewChild,
  QueryList,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewChildren,
  OnDestroy
} from "@angular/core";

export interface ImageSlider {
  id: number;
  imgUrl: string;
  caption: string;
  link: string;
}

@Component({
  selector: "app-image-slider",
  templateUrl: "./image-slider.component.html",
  styleUrls: ["./image-slider.component.css"]
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() imageSliders: ImageSlider[] = [];
  @Input() sliderHeight = "160px";
  @Input() playImageTime = 2;
  @Input() intervalBySeconds = 1000;
  @ViewChild("imageSlider", {static: true}) imageSlider: ElementRef;
  @ViewChildren("imgs") imgs: QueryList<ElementRef>;
  currentIndex = 0;
  intervalId: any;

  constructor(private rd2: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // this.imgs.forEach(img => img.nativeElement.style.height = "100px");
    // this.imgs.forEach((img) => {
    //   this.rd2.setStyle(img.nativeElement, "height", this.sliderHeight);
    // });

    if (this.intervalBySeconds <= 0) {
      return;
    }

    setInterval(() => { // scrollLeft是一个属性, scrollLeft = index * 总宽度 / 图片数
      this.intervalId = this.rd2.setProperty(this.imageSlider.nativeElement, "scrollLeft",
         this.getIndex(++this.currentIndex) * this.imageSlider.nativeElement.scrollWidth / this.imgs.length);
    }, this.playImageTime * this.intervalBySeconds);
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.imgs.length :
       this.imgs.length - (Math.abs(idx) % this.imgs.length);
  }

  handleScroll(ev) {// 300 * 5 / 500， scrollLeft /（一个image宽度）就是第几个图片了
    const ratio = ev.target.scrollLeft * (this.imgs.length / ev.target.scrollWidth);
    this.currentIndex = Math.round(ratio);
  }
}
