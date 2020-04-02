import { Component, OnInit } from '@angular/core';
import {Callback} from '../../@core/models/callback.model';
import {CallbackService} from '../../@core/services/callback.service';

@Component({
  selector: 'app-callbacks',
  templateUrl: './callbacks.component.html',
  styleUrls: ['./callbacks.component.scss']
})
export class CallbacksComponent implements OnInit {
  callbacks: Callback[];
  popupVisible = false;

  constructor(private callbackService: CallbackService) { }

  ngOnInit() {
    this.callbackService.get().subscribe(callbacks => {
      if (callbacks === null) {
        return;
      }
      console.log(callbacks);
      this.callbacks = callbacks;
    });
  }

  add() {
    this.popupVisible = true;
  }

  save($event: any) {
    console.log($event);
    this.callbackService.save($event).subscribe(res => {
      console.log(res);
      this.popupVisible = false;
    }, err => {
      console.error(err);
    })
  }
}
