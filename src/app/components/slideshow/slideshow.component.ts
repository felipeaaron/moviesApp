import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  public swiper : Swiper;

 @Input() movies: Movie[
   ];
  constructor() { }
  
  
  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
    
     
    });
  }

  ngOnInit(): void {
    console.log(this.movies);
  }


  onSlidePrev(){
 this.swiper.slidePrev();

  }

  onSlideNext(){
    this.swiper.slideNext();
  


  }
  
}
