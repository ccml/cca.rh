import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Diplome } from "../entities/dto";

@Injectable({
    providedIn: 'root'
})
export class DiplomeService {

    serviceBaseUrl = "/api/diplome";

    constructor(private httpClient: HttpClient) {        
    }

    public listAll() : Observable<Diplome[]> {
        return this.httpClient.get<Diplome[]>(this.serviceBaseUrl);
    }

}