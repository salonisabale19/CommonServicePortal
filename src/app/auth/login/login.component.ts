import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  users = [
    { username: 'admin', password: 'password', role: 'admin' },
    { username: 'user1', password: 'password1', role: 'user' },
    { username: 'salonisabale19@gmail.com', password: '123', role: 'user' },
    { username: 'sanket@123', password: 'sanky', role: 'user' },
    { username: 'ajit@35', password:'ajju', role:'user'},


  ];

  constructor(private router: Router) { 
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    // Initialization logic, if any
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    const user = this.users.find((u) => u.username === username && u.password === password);

    if (user) {
      this.errorMessage = null; // Clear any previous error messages
      if (user.role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
