import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-grid-list-view',
  templateUrl: './grid-list-view.component.html',
  styleUrls: ['./grid-list-view.component.scss']
})
export class GridListViewComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 5, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 5, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 2, color: '#DDBDF1'},
    {text: 'Five', cols: 2, rows: 4, color: '#DDBDF1'},
  ];
}
