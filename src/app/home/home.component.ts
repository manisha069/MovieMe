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

    //code to get image poster
//     this.movieListService.getMoviesList()
//           .subscribe((response) => { var blob = new Blob([this.movieListService.movieListArray.moviesList.poster], {type: "image/png"});
//             console.log(blob);
//             console.log(window.btoa(blob.toString()));           
//  });

 
    
    // write code to generate a random number within 100 
    this.movieListService.randomInt = Math.floor(Math.random() * 20)
    console.log("random num", this.movieListService.randomInt);

    // prepare data
    this.movieListService.movieData = this.movieListService.movieListArray[this.movieListService.randomInt];
    console.log(this.movieListService.movieData);

  }

  

  movieMeButton(){

  }


}
