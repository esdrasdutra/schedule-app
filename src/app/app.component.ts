import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'schedule-app';

  schedule_day = [
    {
      id: 1,
      name: 'Ronnie'
    },
    {
      id: 2,
      name: 'Carlos'
    },
    {
      id: 3,
      name: 'Jorge'
    }
  ];
}
