import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(){
    this.loginForm = this.fb.group(
      {
        username:[''],
        password:['']
      }
    )
    
  }

  onSubmit() : void{
  if (this.loginForm.valid) {
      
    
      
    // Send the data to the server to verify the user login
    // navigate after successful login.
    // if (this.loginForm.value.username === 'admin') {
    //   //log in as admin
      
    // }

  
    console.log("First");
    this.authService.login().subscribe(result => {
      console.log("Third" + result);
      this.router.navigate(['']);  
    });

    console.log("Second");
    
  }
  else {
    // Show error message or something else.

  }
}

}
