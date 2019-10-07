
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormControl, Validators, ControlContainer, FormControlName } from '@angular/forms';

import { Routes, RouterModule, Router } from '@angular/router';
import { PatientService } from 'src/app/patient.service';
import { Alert } from 'selenium-webdriver';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { DomSanitizer } from '@angular/platform-browser';
declare var $;
@Component({
  selector: 'app-gestionpatients',
  templateUrl: './gestionpatients.component.html',
  styleUrls: ['./gestionpatients.component.css']
})
export class GestionpatientsComponent implements OnInit {
  msg = '';
  msge='';
  unsafeImageUrl: any;
  imageUrl: any;
  atsexe = ['Homme','Femme'];
  listpatients: [];
  resultat: any = [];
  deleteRes: any;
  public index=null;
  patientModif;
  ajoutpatientForm: FormGroup;
  modifpatientForm: FormGroup;
  fileData: File;
  res: any;
  upload: FormGroup;
  data: any;
  dataImg: string;
  accepatient:"Patients";
  submitted = false;
  constructor(private PatientService: PatientService, private router: Router, private sanitizer:DomSanitizer) {

    this.ajoutpatientForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      typeaccee: new FormControl("Patients", [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      groupesanguine: new FormControl('', [Validators.required]),
      antecedents: new FormControl(null, [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),
      datenaissance: new FormControl('', [Validators.required]),
    })
    this.modifpatientForm =new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      typeaccee: new FormControl("Patients", [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      groupesanguine: new FormControl('', [Validators.required]),
      antecedents: new FormControl(null, [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      datenaissance: new FormControl('', [Validators.required]),
    })
    this.upload =new FormGroup({
      uploadedFile: new FormControl(null, [Validators.required]),
      
    })
  }

  onFielSelected(fileInput) {
    this.fileData = <File>fileInput.target.files[0];
  }
  
  ngOnInit() {
    $(document).ready(function() {
      $('.mydatatable').DataTable();
  } );
    this.PatientService.listpatient().subscribe(res => {
      console.log(res);
      this.resultat = res;
    });
  
    this.ajoutpatientForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      typeaccee: new FormControl("Patients", [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      groupesanguine: new FormControl('', [Validators.required]),
      antecedents: new FormControl(null, [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      sexe: new FormControl(null, [Validators.required]),
      datenaissance: new FormControl('', [Validators.required]),
      //: new FormControl('', [Validators.required]),
    })
    this.modifpatientForm =new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      typeaccee: new FormControl("Patients", [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      groupesanguine: new FormControl('', [Validators.required]),
      antecedents: new FormControl(null, [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      sexe: new FormControl(null, [Validators.required]),
      datenaissance: new FormControl('', [Validators.required]),
      data: new FormControl(null, [Validators.required]),
    })
  }
  get f() { return this.ajoutpatientForm.controls; }
  modifier()
  {
   
    console.log(this.index);
    this.PatientService.modifier(this.index,this.modifpatientForm.value).subscribe(test => {
      console.log(test);
if (test==null)
{ console.log("okkk");
  alert("modification avec succe")
  window.close;
  this.ngOnInit();
}
else {
  alert("modification echoué")
}

      this.ngOnInit();

    });
    

  }
  Save() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.ajoutpatientForm.invalid) {
            return;
        }
    const formData = new FormData();
     let patient = this.ajoutpatientForm.value;
    //  let typeaccee = "Patients";
    console.log("type acce: "+ patient.typeaccee );
     console.log("newpatient: "+ patient );
     console.log("data file:" +this.fileData);
    this.PatientService.ajouter(patient).subscribe(msg => {
        
    formData.append('uploadedFile', this.fileData);
    console.log("formdata: " +formData);
     this.PatientService.uploadimage(msg.matriculePatient,formData).subscribe(res1 => {
      
        this.ngOnInit();
  
      })
      alert("Un nouveau patient est ajouté avec succès");
    })
    
  
  }
  resultatoelete(matriculePatient) {
    console.log(matriculePatient);
    return this.deleteRes = matriculePatient;
  }
  getpatient(reslt)
  {
    this.patientModif = reslt;
    this.index=reslt.matriculePatient;

    this.modifpatientForm =new FormGroup({
      nom: new FormControl(reslt.nom, [Validators.required]),
      prenom: new FormControl(reslt.prenom, [Validators.required]),
      password: new FormControl(reslt.password, [Validators.required, Validators.minLength(6)]),
      typeaccee: new FormControl(reslt.typeaccee, [Validators.required]),
      adresse: new FormControl(reslt.adresse, [Validators.required]),
      email: new FormControl(reslt.email, [Validators.required, Validators.email]),
      groupesanguine: new FormControl(reslt.groupesanguine, [Validators.required]),
      antecedents: new FormControl(reslt.antecedents, [Validators.required]),
      telephone: new FormControl(reslt.telephone, [Validators.required]),
      sexe: new FormControl(reslt.sexe, [Validators.required]),
      datenaissance: new FormControl(reslt.datenaissance, [Validators.required]),
      data: new FormControl(reslt.data, [Validators.required]),
    })
    console.log(reslt.data)
    var binaryData = [];
binaryData.push(reslt.data);
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,'+reslt.data);
console.log(this.data);
  }
  delete() {
    console.log("delete this:" +this.deleteRes);
    this.PatientService.delete(this.deleteRes).subscribe(test => {
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
}



