import { Component } from '@angular/core';
import { Router } from '@angular/router';
import CabinJson from './winter.json';

export interface Cabin{
  Location: string,
  Price: number,
  StarRating:number,
  Image: string
}

@Component({
  selector: 'app-winter',
  templateUrl: './winter.component.html',
  styleUrls: ['./winter.component.scss']
})


export class WinterComponent {
  constructor(private router: Router){}
  cabinsJson: any = CabinJson;
  cabins = <Cabin[]>this.cabinsJson;

  tileClicked(cabin:any)
  {
    this.router.navigate(['cabin-info-component'],
    {
      queryParams:{cabinPass:JSON.stringify(cabin)}
    })
  }

  

}


