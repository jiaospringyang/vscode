import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { DialogService } from "src/app/dialog/services";
import { Observable, Subject, merge, combineLatest, interval } from "rxjs";
import { ProductVariant } from "../../domain";
import { map, share, tap } from "rxjs/operators";

@Component({
  selector: "app-confirm-order",
  templateUrl: "./confirm-order.component.html",
  styleUrls: ["./confirm-order.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmOrderComponent implements OnInit {
  data$: Observable<object | null>;
  count$ = new Subject<number>();
  totalPrice$: Observable<number>;
  underlines: number[] = [0, 1, 2, 3, 4, 5, 6];
  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.data$ = this.dialogService.getData().pipe(
      // tap((data) => console.log("data", data)),
      // share()
    );
    const unitPrice$: Observable<number> = this.data$.pipe(
      map(
        (data: { variant: ProductVariant; count: number }) => data.variant.price
      )
    );
    const amount$ = this.data$.pipe(
      map((data: { variant: ProductVariant; count: number }) => data.count)
    );

    const mergeCount$ = merge(amount$, this.count$);
    this.totalPrice$ = combineLatest(unitPrice$, mergeCount$).pipe(
      map(([price, count]) => price * count)
    );
  }

  handleAmountChanged(count0: number) {
    this.count$.next(count0);
  }
}
