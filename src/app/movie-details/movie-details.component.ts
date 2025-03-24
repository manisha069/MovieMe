import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  constructor(public movieListService : MovieService){}

  showTitle:boolean = false;

  ngOnInit(){
    console.log(this.movieListService.movieData.genre)
  }

  nextPlot(){
    this.movieListService.getNextMovieData();
  }


  movieName(){
    let mod = document.getElementById("tncModal")!;
    console.log("modal", mod.style)
   mod.style.display = "block";
  }

  closePopup(){
    let mod = document.getElementById("tncModal")!;
    // console.log("modal", mod.style)
   mod.style.display = "none"

  }

  agreeButton(){
    this.closePopup();
    this.showTitle = true;
  }
}
