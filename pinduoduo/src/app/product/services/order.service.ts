import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductVariant } from "../domain";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class OrderService {
    constructor(private http: HttpClient) {

    }

    getProductVariant(productId: string): Observable<ProductVariant[]> {
        return this.http.get<ProductVariant[]>(`${environment.host}/productVariants`,
        {params: {
            _expand: "product",
            _embed: "productVariantImages",
            productId,
            icode: `${environment.icode}`
        }});
    }
}
