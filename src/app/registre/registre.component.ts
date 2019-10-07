import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer, FormControlName } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  typeDaccee1 = ['Medecin','Patients'];
  userForm : FormGroup;
  public user :Object[]=[];
  submitted = false;
  public user1 :Object[]=[];
  constructor( private authService:AuthService , private router: Router) {

 this.userForm= new FormGroup({
  nom: new FormControl('',[Validators.required]),
    prenom: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    email:new FormControl('',[Validators.required, Validators.email]),
    typeaccee:new FormControl(null,[Validators.required]),
  })
}
  ngOnInit() {
    this.userForm= new FormGroup({
      nom: new FormControl('',[Validators.required]),
      prenom: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      email:new FormControl('',[Validators.required, Validators.email]),
      typeaccee:new FormControl(null,[Validators.required]),
    })
  }
  get f() { return this.userForm.controls; }
  ajouter()
  {
     
     
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }
    let user=this.userForm.value;
     console.log(user);
     
    if (user.typeaccee === "Medecin")
    {

      console.log("1111");
      
      this.authService.register2(user).subscribe(msg => {
       
         //localStorage
        console.log(msg);
          console.log("user",user);
          this.router.navigateByUrl('/login');
    })
    

    }
    if (user.typeaccee === "Patients")
    {

      console.log("222");
      
      this.authService.register3(user).subscribe(msg => {
       
         //localStorage
        console.log(msg);
          console.log("user",user);
          this.router.navigateByUrl('/login');
    })
    

    }
    // if (user.typeaccee === "Assistante")
    // {

    //   console.log("33333333");
      
    //   this.authService.register4(user).subscribe(msg => {
       
    //      //localStorage
    //     console.log(msg);
    //       console.log("user",user);
    //       this.router.navigateByUrl('/login');
    // })
    

    // }
  }
}
