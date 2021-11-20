import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any = [];
  constructor(private _eventService : EventService) { }

  ngOnInit(): void {
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res.data,
        err => console.log(err)
      )
  }

}
