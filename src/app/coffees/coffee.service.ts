import { HttpClient } from "@angular/common/http";
import { Coffee } from "./coffee.model";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class CoffeeService {

    constructor(
        private http: HttpClient
    ){}

    public getCoffees(): Observable<Array<Coffee>> {
        return this.http.get<Array<Coffee>>('http://localhost:8080/api/v1/coffee');
    }
}