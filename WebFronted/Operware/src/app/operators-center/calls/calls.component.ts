import { Component, OnInit } from '@angular/core';
import {CallService} from '../../@core/services/call.service';
import {Call} from '../../@core/models/call.model';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent implements OnInit {

  calls: Call[];
  constructor(private callService: CallService) { }

  ngOnInit() {
    this.callService.get().subscribe(calls => {
      this.calls = calls;
    });
}

}
