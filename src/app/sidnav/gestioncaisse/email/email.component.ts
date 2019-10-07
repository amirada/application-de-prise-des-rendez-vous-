import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'src/app/medecin.service';
import { EmailserviceService } from 'src/app/emailservice.service';
import { FormGroup, FormControl, Validators, ControlContainer, FormControlName } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  resultat: any = [];
  mailForm: FormGroup;
  imageUrl: any;
 message:any;
 mail:any;
  constructor(private service: MedecinService, private servicemail: EmailserviceService, public sanitizer:DomSanitizer) 
  {
    this.mailForm = new FormGroup({
      sendto: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      message:new FormControl(null, [Validators.required])
      
    })
   }

  ngOnInit() {
    this.mailForm = new FormGroup({
      sendto: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      message:new FormControl(null, [Validators.required])
      
    })
    this.service.listmedecins().subscribe (res => {
      console.log(res);
      this.resultat = res;
      
      // for (let j = 0; j < this.resultat.length; j++) 
      // {
      //   let unsafeImageUrl = window.URL.createObjectURL(this.resultat[j].data);
      //   this.resultat[j].data = this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
      // }
     
  })
  // for (let j = 0; j < this.resultat.length; j++) 
  // {
    
  //   var binaryData = [];
  //   binaryData.push(this.resultat[j].data);
  //           this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,'+this.resultat[j].data);
  //   console.log(this.resultat[j]);
  // }
}
send()
{ 
  let rendezvous = this.mailForm.value;
  console.log (rendezvous);
  this.mail=rendezvous.sendto;
  this.message =rendezvous.message;

  this.servicemail.send(this.message,this.mail).subscribe (rslt => {
    console.log(rslt);
    // this.resultat = rslt;
    if(rslt==null){
      alert(" Votre email a ete envoyé avec succès");
    }
    
  })
}
}


