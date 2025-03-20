import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { moviesListArray } from '../models/moviesList.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { }

  movieListArray: any  = [];
  movieData: any = [];
  randomInt: number = 0;

  getMoviesList(){

    return this.http.get<moviesListArray>(environment.movieListUrl)
  }
}
