import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '../../service/application.service';
import { Application } from '../../model/application';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
 
  applications:Application[]=[];
  application=new Application();
  id:number=0;
  constructor(private route:Router, private applicationservice:ApplicationService){}

  ngOnInit(): void {
    this.getapplication();
  }

  getapplication(){
    this.applicationservice.getapplicationlist().subscribe(data=>{
      this.applications=data;
    })
  }

  delete(id:number){
    this.applicationservice.deleteapplication(id).subscribe(data=>{
      console.log(data);
      this.getapplication();
    })
   }

   update(id:number){
    this.route.navigate(['/update']);   }
  logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

}
