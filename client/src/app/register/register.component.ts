import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    email:"",
    password:""
  }

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  registeruser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          // set value in localstorage.
          localStorage.setItem('token', res.token)

          // Routing to special listing.
          this._router.navigate(['/special']);
        },
        err => console.log(err)
      )    
  }
}
