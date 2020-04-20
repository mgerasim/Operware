import { Component, OnInit } from '@angular/core';
import {Configuration} from '../../@core/models/configuration.model';
import {ConfigurationService} from '../../@core/services/configuration.service';
import notify from 'devextreme/ui/notify';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-configuration-event-binding',
  templateUrl: './configuration-event-binding.component.html',
  styleUrls: ['./configuration-event-binding.component.scss']
})
export class ConfigurationEventBindingComponent implements OnInit {
  titleEvents: string[] = [
    'Hangup',
    'Newstate',
    'Dial',
    'Newexten',
    'NewCallerid',
    'Newchannel'
  ];
  titleFields: string[] = [
    'Event',
    'Privilege',
    'Channel',
    'ChannelState',
    'ChannelStateDesc',
    'CallerIDNum',
    'CallerIDName',
    'ConnectedLineNum',
    'ConnectedLineName',
    'Language',
    'AccountCode',
    'Context',
    'Exten',
    'Priority',
    'Uniqueid',
    'Linkedid',
    'Cause'
  ];
  configuration: Configuration;
  loadingVisible = false;
  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    const id = localStorage.getItem('organization');
    if (isNullOrUndefined(id)) {
      throw new Error('Не указнан идентификатор в хранилище ');
    }
    this.configurationService.getById(parseInt(id)).subscribe(configuration => {
      console.log(configuration);
      this.configuration = configuration;
    });
  }

  save() {
    this.loadingVisible = true;
    this.configurationService.save(this.configuration).subscribe(res => {
      notify('Конфигурация успешно обновлена');
      this.loadingVisible = false;
    }, error => {
      this.loadingVisible = false;
      notify(error.message, 'error');
      throw new Error(error);
    });
  }

}
