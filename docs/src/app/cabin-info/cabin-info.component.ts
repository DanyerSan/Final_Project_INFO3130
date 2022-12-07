import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



export interface Cabin{
  Location: string,
  Price: number,
  StarRating:number,
  Image: string
}
@Component({
  selector: 'app-cabin-info',
  templateUrl: './cabin-info.component.html',
  styleUrls: ['./cabin-info.component.scss']
})
export class CabinInfoComponent {
  myNumber : any = 0;
  cabinJson: any = '';
  constructor(private router: Router, private route: ActivatedRoute){}
  totalPrice: any = 0;
  numOfNights: any = 0;
  subTotal: any = 0;
  ngOnInit(){
    this.route.queryParams.subscribe(
      params => {
        this.cabinJson = JSON.parse(params['cabinPass']);
      }
    )
  }
  ChangeTotal()
  {
    this.numOfNights = this.numOfNights + 1;
    this.subTotal = this.numOfNights * this.cabinJson.Price;
    this.totalPrice = this.subTotal * 1.13;   
  }
  MChangeTotal()
  {
    this.numOfNights = this.numOfNights - 1;
    this.subTotal = this.numOfNights * this.cabinJson.Price;
    this.totalPrice = this.subTotal * 1.13;
  }

  bookingClicked()
  {
    this.router.navigate(['booking-component'],
    {
      queryParams:{cabinPass:JSON.stringify(this.cabinJson), quantity:JSON.stringify(this.totalPrice)}
    })
  }

}
