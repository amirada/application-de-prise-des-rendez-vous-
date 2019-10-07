import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer, FormControlName } from '@angular/forms';

import { MedecinService } from 'src/app/medecin.service';
import { RendezvousserviceService } from 'src/app/rendezvousservice.service';
import { EmailserviceService } from 'src/app/emailservice.service';
@Component({
  selector: 'app-gestion-rdv',
  templateUrl: './gestion-rdv.component.html',
  styleUrls: ['./gestion-rdv.component.css']
})
export class GestionRDVComponent implements OnInit {
   message="";
   email_id:any;
   listr=false;
   resultatValue:any;
  rdvForm: FormGroup;
  resultat: any = [];
  public user :any=[];
  listrend: any = [];
  exampleModal:any;
  //public login :Object[]=[];
  msgdate : any;
  daterendezvous: any;
  heurerendezvous: any;
  msgheure :any;
  constructor(private service: MedecinService, private authService: RendezvousserviceService, private servicemail: EmailserviceService) { 
  this.rdvForm = new FormGroup({
    medecin: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    heure:new FormControl(null, [Validators.required]),
    email:new FormControl('', [Validators.required])
    
  })
}
  ngOnInit() {
    this.service.listmedecins().subscribe (res => {
      console.log(res);
      this.resultat = res;
      
    })
    this.authService.listrendezvous().subscribe (slt => {
      console.log(slt);
      this.listrend = slt;
    
    })
    this.rdvForm = new FormGroup({
      medecins: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      heure:new FormControl(null, [Validators.required]),
      email:new FormControl('', [Validators.required])
      
    })
   
    
  }
  onChange(resultatValue) {
    console.log("valeur selected:" +resultatValue); 
   
    for (var j = 0; j < this.resultat.length; j++)
    {
if (this.resultat[j].matmed==resultatValue)
{
this.email_id=this.resultat[j].email;
console.log("email med:"+this.email_id);
}
    }
}
  ajouter()
  {
    this.msgdate = false;
    this.msgheure = false;
        let rendezvous = this.rdvForm.value;
    console.log(rendezvous);
    this.user=JSON.parse( localStorage.getItem('user'));
    console.log(this.user);
   let matpat=this.user.matriculePatient;
      console.log("mat patient: "+matpat);
      console.log(this.resultat);
      let matmed2=rendezvous.medecins;
    
     console.log("mail medecin: "+this.email_id );
      let med=+matmed2;
      console.log("matricule med: "+med);
      let date1 = rendezvous.date;
      let heure1 = rendezvous.heure;
     console.log("date1:" +date1);
     let verif = false;
      for (var j = 0; j < this.listrend.length; j++) {
     
          let date2 =this.listrend[j].daterendezvous;
          
          let heure2=this.listrend[j].heurerendezvous
          let dati= new Date(date1).toISOString().slice(0,10);
          let datj =new Date(date2).toISOString().substring(0, 10); 
        // console.log("heure listrendezvous: "+ heure2);
          // console.log("heure saisie: "+ heure1);
          // console.log("date liste rend converti: "+ datj);
          // console.log("datesaisie: "+ dati);
          
          let matmed1 = this.listrend[j].medecins.matmed;
          // console.log("matmedecin form: "+ matmed2);
          // console.log("matmedlistrendezvous: "+ matmed1);
          if(matmed2==matmed1)
          {
        
          if(dati==datj){
            if(heure1==heure2) {
               verif = true;
              console.log("testheure");
               alert(" Cette date est complete avec ce Docteur. Choisissez un autre heure SVP.")
        
         }
          //  alert(" Cette date est complete avec ce Docteur. Choisissez un autre date SVP.")
             }
        }
       
      }
      if(verif === false){
        console.log("iciiiii");
        console.log("date rendezvous:"+ this.rdvForm.value);
       console.log("medecin:"+med);
       console.log("patient: "+ matpat);
       
       let objet= {
       
        daterendezvous: rendezvous.date,
         heurerendezvous:rendezvous.heure
         
       }
       rendezvous.medecins = null;
       
       
       this.message = "Bonjour, un nouveau rendez-vous est fixé le "+rendezvous.date + " à:" +rendezvous.heure;
       console.log("message a envoyer: "+ this.message);
       console.log("mail medecin: "+this.email_id );
        this.authService.ajout(med,matpat,objet).subscribe(msg => {
          console.log(msg);
          if(msg==null)
          {
            alert("vous avez fixé un rendez vous le : "+rendezvous.date +" à:"+ rendezvous.heure +" . Un email a ete envoyer a ce docteur, et vous recevrez un email de confirmation le plus tôt possible.")
            this.servicemail.send(this.message,this.email_id).subscribe (rslt => {
              console.log(rslt);
              // this.resultat = rslt;
              if(rslt==null){
                this.listr=true;
              }
              
            })
          }
         
          })
      }
    
  }
}
