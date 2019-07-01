import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ShareModule } from "./share/share.module";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./home";

import localzh from "@angular/common/locales/zh-Hans";
import { registerLocaleData } from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ShareModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "zh-hans"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localzh, "zh");
  }
}
