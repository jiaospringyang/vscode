import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { DialogService } from "../../../dialog/services";
import { ProductVariant } from "../../domain";

@Component({
  selector: "app-product-variant",
  templateUrl: "./product-variant.component.html",
  styleUrls: ["./product-variant.component.css"]
})
export class ProductVariantComponent implements OnInit {
  @Input() productVariants: ProductVariant[] = [];
  @Output() formSubmit = new EventEmitter();
  @Output() selected = new EventEmitter();
  @Input() selectedVariantIndex: number;
  count = 0;

  constructor(private dialogService: DialogService) {}

  ngOnInit() {}

  get price(): number {
    if (this.selectedVariantIndex < 0 || this.productVariants.length <= 0) {
      return 0;
    }

    return this.productVariants[this.selectedVariantIndex].price;
  }

  get selectedVariantImage(): string {
    if (
      this.selectedVariantIndex < 0 ||
      this.productVariants.length <= 0 ||
      this.productVariants[this.selectedVariantIndex].productVariantImages
        .length <= 0
    ) {
      return "";
    }

    return this.productVariants[this.selectedVariantIndex]
      .productVariantImages[0].imgUrl;
  }

  get selectedVariantName(): string {
    if (this.selectedVariantIndex < 0 || this.productVariants.length <= 0) {
      return "";
    }

    return this.productVariants[this.selectedVariantIndex].name;
  }

  handleSelectKinds(idx: number) {
    this.selectedVariantIndex = idx;
    this.selected.emit(idx);
  }

  handleAmountChange(count: number) {
    this.count = count;
  }

  handleConfirm() {
    if (this.selectedVariantIndex < 0 || this.productVariants.length <= 0 || this.count <= 0) {
      return;
    }

    this.formSubmit.emit({
      variant: this.productVariants[this.selectedVariantIndex],
      count: this.count
    });

    this.dialogService.close();
  }
}
