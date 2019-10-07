import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer, FormControlName } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { NullAstVisitor } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  typeAccee='';
loginForm : FormGroup;
  public login :Object[]=[];
  constructor(private authService:AuthService , private router: Router) { 
    this.loginForm= new FormGroup({
      nom: new FormControl('',[Validators.required]),
        prenom: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),
        
      })

  }
 
  ngOnInit() {
    this.loginForm= new FormGroup({
  nom: new FormControl('',[Validators.required]),
        prenom: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),
      

      })

  }
  getRole(role){
    
    this.typeAccee=role;
  }
  submit()
  {
    console.log(this.loginForm.value);
    let user=this.loginForm.value;
    if (this.typeAccee === "Medecin")
    {

      console.log("1111");
      
      this.authService.login2(user).subscribe(msg => {
        localStorage.setItem('user', JSON.stringify(msg));
        console.log(msg);
        this.authService.connectedUser = msg;
         //localStorage
        //console.log(msg);
          //console.log("user",msg);
          this.router.navigateByUrl('/home');
    })
    

    }
    if (this.typeAccee === "Patients")
    {
      console.log("2222");
      this.authService.login1(user).subscribe(msg => {
        console.log(msg);
        localStorage.setItem('user', JSON.stringify(msg));
        console.log(user);
        this.authService.connectedUser = msg;
        this.router.navigateByUrl('/home');
  })
    }
    if (this.typeAccee ===  "Assistante")
    {
      console.log("0000")
      this.authService.login3(user).subscribe(msg => {
        console.log(msg);
        localStorage.setItem('user', JSON.stringify(msg));
        console.log(user);
        this.authService.connectedUser = msg;
        this.router.navigateByUrl('/home');
  })
    }
  }
}
