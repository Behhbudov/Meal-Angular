import { Component, OnInit } from '@angular/core';
import { chefs } from '../../mocks/index';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  
  chefsList = chefs

  constructor() {
  }

  ngOnInit(): void {
  }

}
