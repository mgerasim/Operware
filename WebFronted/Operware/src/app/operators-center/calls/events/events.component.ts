import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../../@core/services/event.service';
import {Event} from '../../../@core/models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[];
  pbxCallId: string | undefined;
  private sub: any;
  constructor(private route: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.pbxCallId = params['pbxCallId'];
      if (this.pbxCallId) {
        this.eventService.get(this.pbxCallId).subscribe(events => {
          this.events = events;
        });
      } else {
        this.eventService.getAll().subscribe(events => {
          this.events = events;
        });
      }
    });
  }

}
