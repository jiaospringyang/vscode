import { InjectionToken } from "@angular/core";

export * from "./scrollable-tab";
export * from "./image-slider";
export * from "./horizontal-grid";
export const token = new InjectionToken("baseUrl");
export * from "./count-down";
export * from "./tab-menu";
export interface FootMenu {
    icon: string;
    activeIcon: string;
    title: string;
    link: string;
}
