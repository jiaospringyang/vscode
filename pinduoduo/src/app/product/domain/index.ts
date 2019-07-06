import { Product, ImageSlider } from "src/app/share/components";

export interface ProductVariant {
   id: number;
   name: string;
   price: number;
   listPrice: number;
   productVariantsImage: ImageSlider[];
   product: Product;
}

