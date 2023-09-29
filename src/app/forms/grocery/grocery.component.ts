import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card/card.model';
import { CardComponent } from 'src/app/components/card/card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environment';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule,CardComponent,HttpClientModule],
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss']
})
export class groceryComponent implements OnInit {
  grocery: Card[] = [];
    private readonly http = inject(HttpClient);
  
    ngOnInit(): void {
      this.http
        .get<Card[]>(`${environment.baseUrl}/grocery`)
        .subscribe(grocery => this.grocery = grocery);
    }

  // groceryCards: Card[] = [];

  // ngOnInit(): void {
  //     this.groceryCards = [
  //         {
  //             id: '3',
  //             name: 'Orange',
  //             price: 150,
  //             imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Orange_and_cross_section.jpg',
  //             description: 'Orange Fruit'
  //         },
  //         {
  //             id: '4',
  //             name: 'Apple',
  //             price: 50,
  //             imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
  //             description: 'Apple Fruit'
  //         }
  //     ];
  // }
}
