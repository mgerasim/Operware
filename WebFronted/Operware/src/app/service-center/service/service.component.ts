import { Component, OnInit } from '@angular/core';
import {CallService} from '../../@core/services/call.service';
import notify from 'devextreme/ui/notify';
import {ConfigurationService} from '../../@core/services/configuration.service';

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
     try {
       if (confirm('Вы действительно хотите удалить все звонки, события и переменные?')) {
         const configurationId = parseInt(localStorage.getItem('organization'));
         await this.callService.deleteAll(configurationId).toPromise();
         notify('Операция успешна выполнена!');
       }
     } catch (err) {
         console.error(err);
         notify(err.message, 'error');
     }
  }
}
