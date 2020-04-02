import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Callback} from '../../../@core/models/callback.model';

@Component({
  selector: 'app-callback-form',
  templateUrl: './callback-form.component.html',
  styleUrls: ['./callback-form.component.scss']
})
export class CallbackFormComponent implements OnInit {
  callback: Callback;
  @Output() save = new EventEmitter();
  constructor() {
    this.callback = new Callback();
  }

  ngOnInit() {
  }

  save_Click() {
    this.save.emit(this.callback);
  }
}
