import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $;
@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent implements OnInit {
  currentUser:String;
  data: any;
  dataImg: string;
  imageUrl: any;
  user1:any;
  type="";
  isValid=false;
  constructor( private sanitizer:DomSanitizer) { 
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    this.user1=JSON.parse(localStorage.getItem('user'));
     this.type=this.user1.typeaccee;
     console.log( "type d'accee:"+this.type);
    console.log(this.user1);
    var binaryData = [];
binaryData.push(this.user1.data);
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,'+this.user1.data);
console.log(this.data);


}
  logout(){

    localStorage.removeItem('user');
    
  }
role()
{
  
}
  ngOnInit() {
    this.user1=JSON.parse(localStorage.getItem('user'));
    console.log(this.user1);
    if(this.type ="Medecin"){
      this.isValid = true;
      
    }
    // ------------------------------------------------------- //
    // Sidebar Functionality
    // ------------------------------------------------------ //
    $(document).ready(function () {
    $('#toggle-btn').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');

      $('.side-navbar').toggleClass('shrinked');
      $('.content-inner').toggleClass('active');
      $(document).trigger('sidebarChanged');

      if ($(window).outerWidth() > 1183) {
          if ($('#toggle-btn').hasClass('active')) {
              $('.navbar-header .brand-small').hide();
              $('.navbar-header .brand-big').show();
          } else {
              $('.navbar-header .brand-small').show();
              $('.navbar-header .brand-big').hide();
          }
      }

      if ($(window).outerWidth() < 1183) {
          $('.navbar-header .brand-small').show();
      }
  });
});

  }

  
}
