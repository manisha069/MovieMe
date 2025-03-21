import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  constructor(private movieListService : MovieService){}

 
  ngOnInit(){

    
    //  code to connect to movie api list
    this.movieListService.getMoviesList().subscribe(response =>{
      console.log("movie data", response);
      this.movieListService.movieListArray = response;
    })

    this.movieListService.generateRandomNum();

    //for the first time gets the movie data of the random int.
    this.movieListService.getMovieData(this.movieListService.randomInt);

  }

}
