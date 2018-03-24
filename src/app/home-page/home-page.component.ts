import { Component, OnInit } from '@angular/core';
import { HomeSlides } from '../home-slides';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  slideInit : HomeSlides = {
    title: 'Welcome to',
    content: "Jaddu's Food Field"
  };

  slide1 : HomeSlides = {
  	title: 'Discover Our Story',
  	content: "Jaddu's Food Field showcases the finest in Indian, Mexican, Continental, and various other cuisines, we are also complimented by an exceptional dining experience built on careful attention to every aspect of service, food, and atmosphere."
  };

  slide2 : HomeSlides = {
  	title: 'Uncover Our Food',
  	content: "Short texts relating to the food of the restaurant to attract users + images of the foods."
  };

  slide3 : HomeSlides = {
  	title: 'Recover In Comfort',
  	content: "Short texts relating to the seating arrangement of the restaurant to attract users + image of the restaurant seating."
  };

  constructor() { }

  ngOnInit() {} 

}
