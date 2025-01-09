import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  HttpService,
  Character,
  CharacterResponse,
} from '../../services/http.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = [];

  constructor(public http: HttpService) {}

  ngOnInit(): void {
    this.http.getAllCharacters().subscribe((response: CharacterResponse) => {
      this.characters = response.results;
    });
  }

  ngOnDestroy(): void {}
}
