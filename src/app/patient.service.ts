import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Buffer } from 'buffer';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  All(patient: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private httpClient:HttpClient) { }
  ajouter(patient):any
   {
     return this.httpClient.post("http://localhost:18080/test-web/rest/Patients/ajouter", patient);
   }
   modifier(matriculePatient,patient) 
   {
     return this.httpClient.put("http://localhost:18080/test-web/rest/Patients/edit/" +matriculePatient, patient);
   }
   

   listpatient ()
   {
    return this.httpClient.get("http://localhost:18080/test-web/rest/Patients/All");
   }
delete(matriculePatient )
{
return this.httpClient.delete("http://localhost:18080/test-web/rest/Patients/delete/"+matriculePatient);
}
uploadimage(matriculePatient,uploadedFile)
{
  console.log("matmed: "  +matriculePatient +", image: "  +uploadedFile);
return this.httpClient.post("http://localhost:18080/test-web/rest/Patients/uploadimage/"+matriculePatient,uploadedFile);
}

GetById(matriculePatient )
{
//return this.httpClient.put("http://localhost:18080/test-web/rest/Patients/GetById/"+matriculePatient );
}
}
