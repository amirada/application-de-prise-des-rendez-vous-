import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Buffer } from 'buffer';
@Injectable({
  providedIn: 'root'
})
export class RendezvousserviceService {
  All(Rendezvous: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private httpClient:HttpClient) { }
  ajout(matmed1,matpat,rendezvous)
   {
     console.log(matmed1)
     return this.httpClient.post("http://localhost:18080/test-web/rest/Rendezvous/add/"+ matmed1 + "/"+ matpat, rendezvous );
   }
   listrendezvous()
   {
    return this.httpClient.get("http://localhost:18080/test-web/rest/Rendezvous/All");
   }
   
}
