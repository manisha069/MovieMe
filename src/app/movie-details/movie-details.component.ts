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
   mod.style.display = "block";
  }

  closePopup(){
    let mod = document.getElementById("tncModal")!;
   mod.style.display = "none"

  }

  agreeButton(){
    this.closePopup();
    this.showTitle = true;

    this.movieListService.getWhereToWatch(this.movieListService.movieData.title).subscribe(response =>{
      console.log("where to watch data", response);
      this.movieListService.movieListArray = response;
    })
  }
}
