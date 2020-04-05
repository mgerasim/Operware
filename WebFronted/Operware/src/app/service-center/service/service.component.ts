import { Component, OnInit } from '@angular/core';
import {CallService} from '../../@core/services/call.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private callService: CallService) { }

  ngOnInit() {
  }

  async deleteCallAll() {
     if (confirm('Вы действительно хотите удалить все звонки, события и переменные?')) {
        await this.callService.deleteAll();
        notify('Операция успешна выполнена!');
     }
  }
}
