import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { Card } from 'src/app/components/card/card.model';
import { CardComponent } from "src/app/components/card/card.component";
import { SportsStore } from "./sports.store";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-sports',
  standalone: true,
  providers: [
    // AuthService,
    SportsStore
  ],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  imports: [CommonModule, CardComponent,HttpClientModule]
})
export class SportsComponent implements OnInit {
  sports: Card[] = [];
  private readonly authService = inject(AuthService);
  readonly sportsStore = inject(SportsStore);

  ngOnInit(): void {
    this.sportsStore.fetchSports();
    setTimeout(() => {
      this.sportsStore.saveSport({
        id: 'test 3',
        name: 'Test 3',
        description: 'test 3',
        price: 603.55,
        imageUrl: ''
      });
    }, 5000)
  }

  // sportCards: Card[] = [];

  // ngOnInit(): void {
  //     this.sportCards = [
  //         {
  //             id: '1',
  //             name: 'Football',
  //             price: 1500,
  //             imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
  //             description: 'Football description'
  //         },
  //         {
  //             id: '2',
  //             name: 'Football Boot',
  //             price: 6000,
  //             imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
  //             description: 'Football description'
  //         }
  //     ];
  // }

}