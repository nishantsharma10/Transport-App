import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { SearchServiceExport } from "./search-service-export";

@Injectable()
export class SearchService {
    baseUrl="http://localhost:8181/locationdetails";
    constructor(private httpClient:HttpClient,private searchServiceExport:SearchServiceExport){}

    searchDetails(destination:string){
            return this.httpClient.post(`${this.baseUrl}`,destination,{responseType:'text'}).pipe(
                map((data)=>{
                    console.log(data)
                    this.searchServiceExport;
                    
                })
            )

    }


}
