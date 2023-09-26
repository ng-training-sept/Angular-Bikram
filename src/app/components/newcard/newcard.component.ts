import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newcard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.scss']
})
export class NewcardComponent {
  Username: string='Bikram';
  resetInputField(){
    this.Username ='';
  }
 

}
