import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardDataService } from '../card-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardToDisplay?: Card;

  constructor(private cardDataService: CardDataService) { }

  ngOnInit(): void {
  }

  getCard(): void {
      this.cardDataService.getCard()
      .subscribe(data => this.cardToDisplay = data);
  }

  getCommander(): void {
    this.cardDataService.getCommander()
      .subscribe(data => this.cardToDisplay = data);
  }
}
