import { Injectable, ɵConsole } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connectedUser: any;
  constructor(private httpClient:HttpClient) {
    
    this.connectedUser = JSON.parse(localStorage.getItem('user'));
   }


   register(user) 
   {
     return this.httpClient.post("http://localhost:18080/test-web/rest/User/add", user);
   }
   register2(user) 
   {
     return this.httpClient.post("http://localhost:18080/test-web/rest/Medecins/add", user);
   }
   register3(user) 
   {
     return this.httpClient.post("http://localhost:18080/test-web/rest/Patients/add", user);
   }
   register4(user) 
   {
     return this.httpClient.post("http://localhost:18080/test-web/rest/Assistante/add", user);
   }

   login1(patient) 
   {
     return this.httpClient.post("http://localhost:18080/test-web/rest/Patients/login", patient);
   }
   login2(medecin) 
   {
     return this.httpClient.post("http://localhost:18080/test-web/rest/Medecins/login", medecin);
   }
   login3(assistante) 
   {
     return this.httpClient.post("http://localhost:18080/test-web/rest/Assistante/login", assistante);
   }
}
