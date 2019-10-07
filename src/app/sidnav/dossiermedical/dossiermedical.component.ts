import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import * as html2canvas from 'html2canvas';

import * as jsPDF from 'jspdf';
declare var $;
@Component({
  selector: 'app-dossiermedical',
  templateUrl: './dossiermedical.component.html',
  styleUrls: ['./dossiermedical.component.css']
})
export class DossiermedicalComponent implements OnInit {
  public user :any=[];
  
  data: any;
  nom :any;
  prenom:any;
  email:any;
  datenaissance:any;
  antecedents:any;
  adresse:any;
  sexe:any;
  tel:any;
  groupesanguine:any;
  dataImg: string;
  imageUrl: any;
  constructor(private sanitizer:DomSanitizer) {
    this.user=JSON.parse( localStorage.getItem('user'));
    console.log(this.user);
    this.nom=this.user.nom;
    this.prenom=this.user.prenom;
    this.email=this.user.email;
    this.sexe= this.user.sexe;
    this.groupesanguine=this.user.groupesanguine;
    this.adresse=this.user.adresse;
this.tel=this.user.telephone
    this.antecedents=this.user.antecedents;
    this.datenaissance=this.user.datenaissance;
    console.log(this.nom);
    
    
   }

  ngOnInit() {
    this.user=JSON.parse( localStorage.getItem('user'));
    let n = new Date(); 
    let y = n.getFullYear(); 
    let m = n.getMonth() + 1;
    let d = n.getDate(); document.getElementById("date").innerHTML = d + "/" + m + "/" + y; 
    var binaryData = [];
    binaryData.push(this.user.data);
            this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,'+this.user.data);
    console.log(this.data);
  }
  telecharger()
  {
    html2canvas(document.getElementById ("pdffile")). then (function (canvas) {
      var img = canvas.toDataURL ("image / png");
      var doc = new jsPDF ();
      doc.addImage (img, 'JPEG',0,0,0,0);
      doc.save ('testCanvas.pdf');
      })
  }
}
