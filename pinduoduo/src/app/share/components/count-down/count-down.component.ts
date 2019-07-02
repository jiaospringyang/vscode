import { Component, OnInit, Input } from "@angular/core";
import { Observable, interval } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

@Component({
  selector: "app-count-down",
  templateUrl: "./count-down.component.html",
  styleUrls: ["./count-down.component.css"]
})
export class CountDownComponent implements OnInit {
  countDown$: Observable<any>;
  @Input() startDate: Date = new Date(2019, 6, 1);
  @Input() futureDate: Date = new Date(2019, 6, 2);
  SECOND_NUMBER = 1000;

  constructor() { }

  ngOnInit() {
    this.countDown$ = this.getCountDownObservable();
  }

  private getCountDownObservable() {
    return interval(1000).pipe(
      map((num) => Math.floor(this.differSecond(this.startDate, this.futureDate) - num)),
      takeWhile((value) => value >= 0),
      map((sec) => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor(sec / 3600 % 24),
        minute: Math.floor(sec / 60 % 60),
        second: Math.floor(sec % 60),
      })),
      map(({hour, minute, second}) => `${hour} : ${minute} : ${second}`)
    );
  }

  private differSecond = (startDate: Date, futureDate: Date) => {
    const differ = futureDate.getTime() - startDate.getTime();
    return Math.floor(differ / this.SECOND_NUMBER);
  }
}
