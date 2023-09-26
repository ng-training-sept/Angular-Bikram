import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { SpecialDirective } from './directives/special.directive';
import { NewcardComponent } from './components/newcard/newcard.component';
import { BikramComponent } from './components/bikram/bikram.component';
import { ImpureDemoPipe } from './pipes/impure-demo.pipe';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule, MatButtonModule,MatCardModule , FormsModule,
   SpecialDirective,NewcardComponent,BikramComponent,DatePipe,
   ImpureDemoPipe,AppComponent,HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularBasic';
  cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];
  addCard(title: string) {
    this.cardsTitle.push(title);
  }
    cardList:string[]=['Card1','card2','card3'];

    onDeleteCard(index: number){
      this.cardList.splice(index,1 );
    }
    


  
}
