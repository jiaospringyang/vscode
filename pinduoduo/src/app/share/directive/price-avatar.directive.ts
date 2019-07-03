import { Directive, Input, HostBinding } from "@angular/core";

@Directive({
  selector: "[appPriceAvatar]"
})
export class PriceAvatarDirective {
  @Input()
  @HostBinding("style.width")
  @HostBinding("style.width")
  avatarSize = "1rem";

  @HostBinding("style.border-radius")
  radius = "1rem";
}
