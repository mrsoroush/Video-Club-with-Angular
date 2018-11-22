import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from 'src/app/services/movies.service';
import { IMovies } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit, OnDestroy {
  
  movieSubscription: Subscription;
  singleMovie: IMovies;
  movieId: number;
  
  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.movieSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.movieId = params['id'];
        this.singleMovie = this.movieService.getMovie(+this.movieId);
      });
    }

  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
  }
    
  }
  