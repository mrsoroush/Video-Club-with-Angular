import { Component, OnInit } from '@angular/core';
import { IMovies } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovies[] = [
    {id: 1, name: 'Werkmeister Harmonies', picPath: 'assets/moviePics/Sanjesh1.jpg', summary: 'Best film that I ever seen'},
    {id: 2, name: 'Punishment', picPath: 'assets/moviePics/Sanjesh2.jpg', summary: 'Best film that I ever seen'},
    {id: 3, name: 'The Miraclous Virgin', picPath: 'assets/moviePics/Sanjesh3.jpg', summary: 'Wonderful film from Czeck cinema'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
