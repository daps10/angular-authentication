import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents:any = [];
  constructor(private _eventService:EventService, 
    private _router:Router) { }

  ngOnInit(): void {
    this._eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res.data,
        err => {
          if(err instanceof HttpErrorResponse) {
            if(err.status === 401) {
              this._router.navigate(['/login'])
            }
            if(err.status === 500) {
              this._router.navigate(['/login'])
            }
          } 
        }
      )
  }
}
