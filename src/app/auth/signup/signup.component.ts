import { Component } from '@angular/core';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  name: string = '';
  username: string = ''; // Corrected 'useranme' to 'username'
  password: string = '';

  user:User=new User();

  constructor(private authService:AuthService, private route:Router) {}

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.name = '';
  }

  signup() {
    this.user.username=this.username;
    this.user.password=this.password;
    this.user.name=this.name;
    this.user.role='user';

    this.authService.signUp(this.user).subscribe(res => {
      if(res == null) {
        alert("Registration failed");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        alert("Registration successful");
        this.route.navigate(['/user']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })

  }
  }

