import { Directive, HostListener } from "@angular/core";
import { DialogService } from "../services";

@Directive({
  selector: "[appDialogClose]"
})
export class DialogCloseDirective {
  constructor(private dialogService: DialogService) { }

  @HostListener("click", ["event"])
  closeDialog(event: Event) {
    this.dialogService.close();
  }
}
