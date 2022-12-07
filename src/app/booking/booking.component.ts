import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export interface Cabin{
  Location: string,
  Price: number,
  StarRating:number,
  Image: string,
  Quantity: number
}


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  cabinJson: any = '';
  quantity: any = 0;
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(
      params => {
        this.cabinJson = JSON.parse(params['cabinPass']);
        this.quantity = JSON.parse(params['quantity']);
      }
    )
  }
}
