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

    public ajouterDiplome(diplome: Diplome) : Observable<Diplome> {
        return this.httpClient.post<Diplome>(this.serviceBaseUrl, diplome);
    }

    public modifierDiplome(diplome: Diplome) : Observable<Diplome> {
        return this.httpClient.put<Diplome>(this.serviceBaseUrl, diplome);
    }

    public supprimerDiplome(id:number) : Observable<boolean> {
        return this.httpClient.delete<boolean>(this.serviceBaseUrl + '/' + id);
    }
}