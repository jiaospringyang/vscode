import { Injectable } from "@angular/core";
import {
    HttpInterceptor, HttpHandler, HttpRequest
} from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable()
export class ParamsInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const req2 = req.clone({
          setParams: {icode: environment.icode}
        });

        return next.handle(req2);
    }
}
