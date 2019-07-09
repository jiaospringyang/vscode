import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ShareModule } from "./share/share.module";
import { AppRoutingModule } from "./app-routing.module";
import { ParamsInterceptor, NotificationInterceptor } from "./home";

import localzh from "@angular/common/locales/zh-Hans";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RecommendModule } from "./recommend";
import { CategoryModule } from "./category/category.module";
import { ChatModule } from "./chat/chat.module";
import { MyModule } from "./my/my.module";
import { ProductModule } from "./product/product.module";
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ShareModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    RecommendModule,
    CategoryModule,
    ChatModule,
    ProductModule,
    MyModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "zh-hans"
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamsInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localzh, "zh");
  }
}
