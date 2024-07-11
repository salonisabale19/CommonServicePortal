import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from '../../model/application';
import { ApplicationService } from '../../service/application.service';

@Component({
  selector: 'app-applicationform',
  templateUrl: './applicationform.component.html',
  styleUrl: './applicationform.component.css'
})
export class ApplicationformComponent implements OnInit{
  applicationForm: any;
  application:Application=new Application();
  constructor(private fb: FormBuilder, private router: Router,private applicationservice:ApplicationService) 

  {
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
    this.saveApplication();
  }

  saveApplication(){
    this.applicationservice.createapplication(this.application).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/submitted']);    })
  }
 update(){
  this.router.navigate(['/update']);
 }
  

  logout() {
    // Handle logout logic
    console.log('User logged out');
  }
}


