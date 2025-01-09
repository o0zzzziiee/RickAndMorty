import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface CharacterResponse {
  info: PaginationInfo;
  results: Character[];
}

export interface PaginationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationInfo;
  location: LocationInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface LocationInfo {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private API_URL = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getAllCharacters() {
    return this.http.get<CharacterResponse>(this.API_URL);
  }
}
