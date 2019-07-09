import { Product, ImageSlider } from "src/app/share/components";

export interface ProductVariant {
   id: number;
   name: string;
   price: number;
   listPrice: number;
   productVariantImages: ImageSlider[];
   product: Product;
}

export interface GroupOrder {
   id: number;
   productId: number;
   startBy: string;
   avatar: string;
   startAt: Date;
   remainingNumber: number;
}
