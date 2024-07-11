import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  applicationForm: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.applicationForm = this.fb.group({
      firstname: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Age: ['', Validators.required],
      DOB: ['', Validators.required],
      Religion: ['', Validators.required],
      Gender: ['', Validators.required],
      'Mobile number': ['', Validators.required],
      Address: ['', Validators.required],
      Pincode: ['', Validators.required],
      'Family-income': ['', Validators.required],
      'Family-members': ['', Validators.required],
      'College-name': ['', Validators.required],
      'Passing-year': ['', Validators.required],
      Board: ['', Validators.required],
      Percentage: ['', Validators.required],
      'Aadhar-number': ['', Validators.required],
      'Pan-card': ['', Validators.required],
      'Income-certificate': [null, Validators.required],
      'Bank-passbook': [null, Validators.required],
      Secondary: [null, Validators.required],
      'Higher-Secondary': [null, Validators.required],
      Graduation: [null, Validators.required],
      'Post-Graduation': [null, Validators.required],
      'Aadhar-card': [null, Validators.required],
      'pan-card': [null, Validators.required],
      'Cate-certificate': [null, Validators.required],
      'Domicile-certificate': [null, Validators.required],
      'Ration-card': [null, Validators.required],
      Photo: [null, Validators.required],
      Sign: [null, Validators.required],
      Acknowledgement: [null, Validators.required]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      // Handle form submission
      console.log(this.applicationForm.value);
      this.router.navigate(['/submitted']);
    }
  }

  logout() {
    // Handle logout logic
    console.log('User logged out');
  }
}