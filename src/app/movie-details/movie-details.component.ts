import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  constructor(public movieListService : MovieService){}

  ngOnInit(){
    console.log(this.movieListService.movieData.genre)
  }

  nextPlot(){
    this.movieListService.getNextMovieData();
  }

  movieName(){

  }
}
