import { Component, OnInit } from '@angular/core';
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
  cabinJson: any = '';
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(
      params => {
        this.cabinJson = JSON.parse(params['cabinPass']);
      }
    )
  }

}
