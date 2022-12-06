import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cabin } from '../winter/winter.component';
import CabinJson from './summer.json';

@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.scss']
})
export class SummerComponent {
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
