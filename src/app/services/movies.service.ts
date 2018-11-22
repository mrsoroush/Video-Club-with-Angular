import { Injectable } from '@angular/core';
import { IMovies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: IMovies[] = [
    {id: 1, name: 'Werkmeister Harmonies', picPath: 'assets/moviePics/Sanjesh1.jpg', summary: 'Best film that I ever seen'},
    {id: 2, name: 'Punishment', picPath: 'assets/moviePics/Sanjesh2.jpg', summary: 'Best film that I ever seen'},
    {id: 3, name: 'The Miraclous Virgin', picPath: 'assets/moviePics/Sanjesh3.jpg', summary: 'Wonderful film from Czeck cinema'},
  ];

  getMovie(id: number){
    const movie = this.movies.find(
      (m) => {
        return m.id === id;
      });
    return movie;
  }
  
  constructor() { }
}
