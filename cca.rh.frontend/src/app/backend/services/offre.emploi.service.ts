import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OffreEmploi } from "../entities/dto";

@Injectable({
    providedIn: 'root'
})
export class OffreEmploiService {

    serviceBaseUrl = "/api/offre-emploi";

    constructor(private httpClient: HttpClient) {        
    }

    public listAll() : Observable<OffreEmploi[]> {
        return this.httpClient.get<OffreEmploi[]>(this.serviceBaseUrl);
    }

    public getById(offreEmploiId: number) : Observable<OffreEmploi> {
        return this.httpClient.get<OffreEmploi>(this.serviceBaseUrl + '/' + offreEmploiId);
    }
    
}