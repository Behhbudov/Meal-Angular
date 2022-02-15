import { Component, OnInit } from '@angular/core';
import { otherServices } from '../../mocks/index';

@Component({
  selector: 'app-other-services',
  templateUrl: './other-services.component.html',
  styleUrls: ['./other-services.component.css']
})
export class OtherServicesComponent implements OnInit {

  services = otherServices

  constructor() { }

  ngOnInit(): void {
  }

}
