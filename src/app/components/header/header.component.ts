import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText = '';
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    
    }

  onSearch(){
    
  }

  }
  