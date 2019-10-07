import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormControl, Validators, ControlContainer, FormControlName } from '@angular/forms';
import { MedecinService} from 'src/app/medecin.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { DomSanitizer } from '@angular/platform-browser';
declare var $;

@Component({
  selector: 'app-gestionmedecins',
  templateUrl: './gestionmedecins.component.html',
  styleUrls: ['./gestionmedecins.component.css']
})
export class GestionmedecinsComponent implements OnInit {
  ajoutmedecinForm: FormGroup;
  msg = '';
  msge='';
  unsafeImageUrl: any;
  imageUrl: any;
  atsexe = ['Homme','Femme'];
  listmedecin: [];
  resultat: any = [];
  deleteRes: any;
  public index=null;
  patientModif;
  modifmedecinForm: FormGroup;
  medModif:FormGroup;
  fileData: File;
  res: any;
  upload: FormGroup;
  data: any;
  dataImg: string;
  submitted = false;
  constructor(private medService: MedecinService, private router: Router, private sanitizer:DomSanitizer) {
   
      this.ajoutmedecinForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      spicialite: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      telmed: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      typeaccee: new FormControl("Medecin", [Validators.required]),
      
      email: new FormControl('', [Validators.required, Validators.email]),
      
    })
    this.modifmedecinForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      typeaccee: new FormControl("Medecin", [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      picialite: new FormControl('', [Validators.required]),
      telmed: new FormControl('', [Validators.required]),
      
      
      //: new FormControl('', [Validators.required]),
    })
    this.upload =new FormGroup({
      uploadedFile: new FormControl(null, [Validators.required]),
   
    })
    //console.log(uploadedFile);
  }

  onFielSelected(fileInput) {
    this.fileData = <File>fileInput.target.files[0];
    console.log(this.fileData);
  }
  ngOnInit() {
    $(document).ready(function () {
      $('#example').DataTable();
      });
    this.medService.listmedecins().subscribe(res => {
      console.log(res);
      this.resultat = res;
       });
    this.ajoutmedecinForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      spicialite: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      telmed: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      typeaccee: new FormControl("Medecin", [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
     })

    this.modifmedecinForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      typeaccee: new FormControl("Medecin", [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      spicialite: new FormControl('', [Validators.required]),
      telmed: new FormControl('', [Validators.required]),
      
      
      //: new FormControl('', [Validators.required]),
    })
    
  }
  get f() { return this.ajoutmedecinForm.controls; }
  
  resultatoelete(matmed) {
    //console.log(matmed);
    return this.deleteRes = matmed;
  }
  getmedecin(reslt)
  {
    this.medModif = reslt;
    this.index=reslt.matmed;

    this.modifmedecinForm =new FormGroup({
      nom: new FormControl(reslt.nom, [Validators.required]),
      prenom: new FormControl(reslt.prenom, [Validators.required]),
      password: new FormControl(reslt.password, [Validators.required]),
      typeaccee: new FormControl(reslt.typeaccee, [Validators.required]),
      adresse: new FormControl(reslt.adresse, [Validators.required]),
      email: new FormControl(reslt.email, [Validators.required]),
     telmed: new FormControl(reslt.telmed, [Validators.required]),
      spicialite: new FormControl(reslt.spicialite, [Validators.required]),
      data: new FormControl(reslt.data, [Validators.required]),
    })
    //console.log(reslt.data)
    var binaryData = [];
binaryData.push(reslt.data);
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,'+reslt.data);
console.log(this.data);
  }
  delete() {
    console.log("delete here");

    console.log(this.deleteRes);

    this.medService.delete(this.deleteRes).subscribe(test => {
      console.log(test);
if (test==null)
{
  alert("suppression avec succe")
  window.close;
}
else {
  alert("suppression echoué")
}

      this.ngOnInit();

    })
  }

  // Save() {
    
  //   this.submitted = true;

  //       // stop here if form is invalid
  //       if (this.ajoutmedecinForm.invalid) {
  //           return;
  //       }
  //    const formData = new FormData();
  //    let medecin = this.ajoutmedecinForm.value;
  //    let sp= this.ajoutmedecinForm.value.spicialite;
  //      //  let typeaccee = "Patients";
  //   console.log("medecin ajouteet: "+ medecin );
  //   console.log(" Spicialite: "+ sp);
  //   // console.log(" image: "+ this.ajoutmedecinForm.value);
  //   this.medService.ajouter(medecin).subscribe(msg => {
  //   console.log(msg);
  //   console.log("data file:" +this.fileData);
  //   formData.append('uploadedFile', this.fileData);
  //   this.medService.uploadimage(msg.matmed,formData).subscribe(res1 => {
     
  //     this.ngOnInit();
  //      })
  //     alert("Un nouveau medecin est ajouté avec succès");
  //   })
    
  
  // }

  Save() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.ajoutmedecinForm.invalid) {
            return;
        }
    const formData = new FormData();
     let medecin = this.ajoutmedecinForm.value;
    //  slet typeaccee = "Patients";
    console.log("type acce: "+ medecin.typeaccee );
     console.log("newpatient: "+ medecin );
     console.log("data file:" +this.fileData);
    this.medService.ajouter(medecin).subscribe(msg => {
        
    formData.append('uploadedFile', this.fileData);
    console.log("formdata: " +formData);
     this.medService.uploadimage(msg.matmed,formData).subscribe(res1 => {
      
        this.ngOnInit();
  
      })
      alert("Un nouveau  medecin est ajouté avec succès");
    })
    
  
  }
}
