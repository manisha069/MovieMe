import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { moviesListArray } from '../models/moviesList.model';
import { whereToWatchArray } from '../models/whereToWatch.model';
import { Observable } from 'rxjs';
import { title } from 'process';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { }

  movieListArray: any  = [];
  movieData: any = [];
  randomInt: number = 0;
  usedMovies :any = [];
  movieIncrCount :number = 0;
  listEnd :boolean = false;

  getMoviesList(){

    return this.http.get<moviesListArray>(environment.movieListUrl)
  }

  generateRandomNum(){
    this.randomInt = Math.floor(Math.random() * 20)
    console.log("random num", this.randomInt)
    this.movieIncrCount = this.randomInt;
  }

  getMovieData(num:number){
    this.movieData = this.movieListArray[num];
    console.log(this.movieData);
  }

  // if the ransom int isnt the end limit, keep increasing it by one, if limit then set it to 0.
    // if it reached back to the random int, display you have reached the end of this list, create bool
    // reset movie data of service file every time except last case.
  getNextMovieData(){

    if(this.movieIncrCount == 0){
      this.listEnd = false;
      this.getMovieData(this.movieIncrCount);
      this.movieIncrCount += 1;
      console.log("count 0", this.movieIncrCount)

    }

    else if(this.movieIncrCount < 19 && this.movieIncrCount != 0){
      this.movieIncrCount += 1;
      this.getMovieData(this.movieIncrCount);
      console.log("count b/w 0 and 19", this.movieIncrCount)

    }
    else if(this.movieIncrCount == 19 ){
      this.getMovieData(this.movieIncrCount);
      this.movieIncrCount = 0;
      console.log("count is 19", this.movieIncrCount)

    }
    if(this.movieIncrCount == this.randomInt){
      this.listEnd = true;
      console.log("count 0", this.movieIncrCount)
    }

  }

  // private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*') //to prevent CORS err or
  // .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
  // .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue)

  
  getWhereToWatch(titleName :string): Observable<whereToWatchArray>{
    console.log("in service", titleName)

  //   return this.http.get<whereToWatchArray>(environment.whereToWatchURL,{
  //     headers : new HttpHeaders().set('Access-Control-Allow-Origin', '*') //to prevent CORS err or
  //         .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
  //         .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue),
  //     params : new HttpParams().set('country', 'in')
  //         .set('title',titleName)
  //   })
  // }
  return this.http.get<whereToWatchArray>(environment.whereToWatchURL + "in/"+ titleName,{
    headers : new HttpHeaders().set('Access-Control-Allow-Origin', '*') //to prevent CORS err or
        .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue),
    // params : new HttpParams().set('country', 'in')
    //     .set('title',titleName)
  })
}
}
