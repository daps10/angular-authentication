import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service'
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents:any = [];
  constructor(private _eventService:EventService) { }

  ngOnInit(): void {
    this._eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res.data,
        err => console.log(err)
      )
  }
}
