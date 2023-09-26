import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bikram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bikram.component.html',
  styleUrls: ['./bikram.component.scss']
})
export class BikramComponent {
  users = [
    {
      username: 'Bikash',
      address: 'Harkatta',
      age: 20
    },
    {
      username: 'Dilip',
      address: 'Butwal',
      age: 25
    },
    {
      username: 'Rajan',
      address: 'KTM',
      age: 40
    }
  ];
  filterUser:any[]=[];
  constructor(){
    this.filterUser=this.users.filter(user=>user.age>20);
  }

}
