import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor(private http:HttpClient) { }

  apiRootUrl: string = "https://api.scryfall.com/";
  apiRandomCard: string = "cards/random";
  apiRandomCommander: string = "?q=is%3Acommander"

  getCard(): Observable<Card> {
    return this.http.get<Card>(this.apiRootUrl + this.apiRandomCard);
  }

  getCommander(): Observable<Card> {
    return this.http.get<Card>(this.apiRootUrl + this.apiRandomCard + this.apiRandomCommander)
  }
}
