import { Injectable, Type, Inject } from "@angular/core";
import { DomService, ChildConfig } from "./dom.service";
import { DOCUMENT } from "@angular/common";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DialogService {
  private readonly dialogContainerElementId: string = "dialog-container";
  private readonly overlayElementID: string = "overlay";
  private date$ = new BehaviorSubject<object | null>(null);
  constructor(
    private domService: DomService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  public open(childConfig: ChildConfig, component: Type<any>) {
    this.domService.appendComponentTo(
      childConfig,
      this.dialogContainerElementId,
      component
    );
    if (childConfig.dialogPos) {
       const element = this.doc.getElementById(this.dialogContainerElementId);
       element.style.left = childConfig.dialogPos.left;
       element.style.top = childConfig.dialogPos.top;
       element.style.width = childConfig.dialogPos.width;
       element.style.height = childConfig.dialogPos.height;
      }

    this.toggleAll();
  }

  public close() {
    this.domService.removeComponent();
    this.toggleAll();
  }

  private toggleAll() {
    this.toggleVisibility(
      this.doc.getElementById(this.dialogContainerElementId)
    );
    this.toggleVisibility(this.doc.getElementById(this.overlayElementID));
  }

  private toggleVisibility(element: Element) {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      element.classList.add("show");
      return;
    }

    if (element.classList.contains("show")) {
      element.classList.remove("show");
      element.classList.add("hidden");
    }
  }

  getData() {
    return this.date$.asObservable();
  }

  saveData(obj: object | null) {
    this.date$.next(obj);
  }
}
