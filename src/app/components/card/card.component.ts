import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from 'src/app/pipes/reverse.pipe';
import { ImpureDemoPipe } from 'src/app/pipes/impure-demo.pipe';
import { outputAst } from '@angular/compiler';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatCardModule , FormsModule, DatePipe,ReversePipe,ImpureDemoPipe ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  name:string='Bikram';
  contact: number=9812914878;
  profile={
    name:{
      fname:'Bikram',
      lname:'Shrestha'
    },
    age:24
    }
    Obj: {id: number,
       Name: string} = 
       {id: 10,
       Name: 'Ram'};

       getName(): string {
        return this.name;
      }
      likeCount: number = 0;
      isbuttonDisabled=false;
      togglebutton=false;
      
      onLike(){
        // this.isbuttonDisabled=!this.isbuttonDisabled      
        this.likeCount++;
        // alert('Count Increase!');
      }
      ontoggle(){
        this.isbuttonDisabled=!this.isbuttonDisabled ;
      }
      // titless: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

      //  @Input({required: true}) titles: string[] = [];

      //  @Output() titleEvent$ = new EventEmitter<string>();

      //  onAddCard(title: string): void {
      //   this.titleEvent$.emit(title);  
      //  }
        
        @Input({required:true}) cardTitles:string[]=[];
        @Output() deleteCard=new EventEmitter<void>();
      
        onDeleteClick()
        {
          this.deleteCard.emit();
        }
        
    birthday = new Date(1988, 3, 15);
    amount=25;
    numbers:number[]=[1,2,3,4,5,6,7,8,9,10];
    title="Bikram";
    person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York'
  };
 
    
}