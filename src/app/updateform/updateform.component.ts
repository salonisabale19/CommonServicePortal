import { Component } from '@angular/core';
import { Application } from '../model/application';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../service/application.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrl: './updateform.component.css'
})
export class UpdateformComponent {

  application=new Application();
  id:number=0;
  constructor(private applicationservice:ApplicationService,private route:ActivatedRoute,private router:Router){}
  ngOnInit() {
   this.id=this.route.snapshot.params['id'];
   this.applicationservice.search(this.id).subscribe((data)=>{
    this.application=data;
   })
  }
  onSubmit(){
    this.update();
  }
  update()
  {
    this.applicationservice.update(this.application).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
