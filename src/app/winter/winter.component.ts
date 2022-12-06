import { Component } from '@angular/core';
import CabinJson from './winter.json';
 /*export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}*/
export interface Cabin{
  Location: string,
  Price: number,
  StarRating:number,
  CabinId:string,
  Image: string
}

@Component({
  selector: 'app-winter',
  templateUrl: './winter.component.html',
  styleUrls: ['./winter.component.scss']
})

export class WinterComponent {

 /*tiles: Tile[] = [
    {text: 'One', cols: 2, rows:5, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 5, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 5, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 5, color: '#DDBDF1'},
    {text: 'Five', cols: 2, rows: 5, color: '#DDBDF1'},
    {text: 'Five', cols: 2, rows: 5, color: '#DDBDF1'},
  ];*/

  cabinsJson: any = CabinJson;
  cabins = <Cabin[]>this.cabinsJson;
  

}


