import { Component, OnInit } from '@angular/core';
import { featuredFood } from '../../mocks/index';

@Component({
  selector: 'app-featured-food',
  templateUrl: './featured-food.component.html',
  styleUrls: ['./featured-food.component.css']
})
export class FeaturedFoodComponent implements OnInit {

  featured = featuredFood

  constructor() { }

  ngOnInit(): void {
  }

}
