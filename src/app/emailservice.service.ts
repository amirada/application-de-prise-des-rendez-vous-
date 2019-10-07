import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { send } from 'process';
@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {
  All(Email: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private httpClient:HttpClient) { 
  }
  send(message,email_id)
  {
    // console.log(matmed1)
    return this.httpClient.post("http://localhost:18080/test-web/rest/Send_email_gmail/sentemail/"+ message + "/"+ email_id,null);
  }
}
