import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Buffer } from 'buffer';
@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  All(medecin: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private httpClient:HttpClient) { }
  listmedecins ()
  {
   return this.httpClient.get("http://localhost:18080/test-web/rest/Medecins/All2");
  }
  delete(matmed)
{
return this.httpClient.delete("http://localhost:18080/test-web/rest/Medecins/delete/"+matmed);
}
  ajouter(medecin):any
  {
    return this.httpClient.post("http://localhost:18080/test-web/rest/Medecins/ajouter", medecin);
  }
  uploadimage(matmed, uploadedFile)
{
  console.log("matmed: "  +matmed +", image: "  +uploadedFile);
return this.httpClient.post("http://localhost:18080/test-web/rest/Medecins/uploadimage/"+matmed,uploadedFile);
}
}
