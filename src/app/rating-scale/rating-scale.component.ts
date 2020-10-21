import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating-scale',
  templateUrl: './rating-scale.component.html',
  styleUrls: ['./rating-scale.component.scss']
})
export class RatingScaleComponent implements OnInit {

  @Input() name: number;
  @Input() scale: number;

  constructor() { }

  ngOnInit(): void {
  }

}
