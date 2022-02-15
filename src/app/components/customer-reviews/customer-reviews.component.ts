import { Component, OnInit } from '@angular/core';
import { customerReviews } from 'src/app/mocks';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent implements OnInit {

  reviews = customerReviews
  activeTab = 0

  constructor() { }

  ngOnInit(): void {
  }

}
