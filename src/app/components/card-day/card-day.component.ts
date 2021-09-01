import { Component, OnInit } from '@angular/core';
import { Schedule } from './Schedule.model';

@Component({
  selector: 'app-card-day',
  templateUrl: './card-day.component.html',
  styleUrls: ['./card-day.component.scss']
})
export class CardDayComponent implements OnInit {


  schedule_night = [];

  constructor() { }


  ngOnInit(): void {
  }

}
