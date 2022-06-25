import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EnumsList } from "../entities/dto";

@Injectable({
    providedIn: 'root'
})
export class EnumsService {

    serviceBaseUrl = "/api/enums";

    enumsList?: EnumsList;

    constructor(private httpClient: HttpClient) {        
    }

    private async getFromService() : Promise<EnumsList | undefined> {
        return this.httpClient.get<EnumsList>(this.serviceBaseUrl).toPromise();
    }

    public async getEnumsList() : Promise<EnumsList | undefined> {
        if(!this.enumsList) {
            this.enumsList = await this.getFromService();
        }
        return this.enumsList;
    }

}