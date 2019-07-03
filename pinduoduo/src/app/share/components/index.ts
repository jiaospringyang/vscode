import { InjectionToken } from "@angular/core";

export * from "./scrollable-tab";
export * from "./image-slider";
export * from "./horizontal-grid";
export const token = new InjectionToken("baseUrl");
export * from "./count-down";
export * from "./tab-menu";
export * from "./vertical-grid";
export * from "./product-card";

export interface FootMenu {
    icon: string;
    activeIcon: string;
    title: string;
    link: string;
}
export interface Ads {
    imageUrl: string;
    link: string;
}
export interface Product {
    id: number;
    imageUrl: string;
    title: string;
    tags: string[];
    price: number;
    priceDesc: string;
    buyerAvatars: string[];
}
