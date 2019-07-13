import { Directive, Input, HostBinding } from "@angular/core";

@Directive({
  selector: "[appPriceAvatar]"
})
export class PriceAvatarDirective {
  @Input()
  @HostBinding("style.width")
  @HostBinding("style.width")
  avatarSize = "1.5rem";

  @Input()
  @HostBinding("style.border-radius")
  radius = "1.5rem";
}
