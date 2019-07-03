import { Injectable, OnInit } from "@angular/core";
import { ImageSlider, Ads, Product } from "../share/components";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { TopMenu } from "./components/home-container";

export interface GridItem {
  id: number;
  icon: string;
  link: string;
  title: string;
}

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getGrids(): Observable<any> {
    return this.http.get<GridItem[]>(`${environment.host}/channels`, {
      params: { icode: `${environment.icode}` }
    });
  }

  getImageSlides(): Observable<ImageSlider[]> {
    return this.http.get<ImageSlider[]>(`${environment.host}/banners`, {
      params: { icode: `${environment.icode}` }
    });
  }

  getTabs(): Observable<TopMenu[]> {
    return this.http.get<TopMenu[]>(`${environment.host}/tabs`, {
        params: { icode: `${environment.icode}` }
      });
  }

  getAds(tab: string): Observable<Ads[]> {
    return this.http.get<Ads[]>(`${environment.host}/ads`, {
      params: { categories_like: tab,
                icode: `${environment.icode}`
              }
    });
  }

  getProducts(tab: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.host}/products`, {
      params: { categories_like: tab,
                icode: `${environment.icode}`
              }
    });
  }
}
