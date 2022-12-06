import { Component } from '@angular/core';
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

  cabinsJson: any = CabinJson;
  cabins = <Cabin[]>this.cabinsJson;
  

}


