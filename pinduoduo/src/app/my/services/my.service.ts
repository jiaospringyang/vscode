import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Profile } from "../domain";
import { environment } from "src/environments/environment.prod";

@Injectable({ providedIn: "root" })
export class MyService {
  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${environment.host}/profile`, {
      params: {
        icode: `${environment.icode}`
      }
    });
  }
}
