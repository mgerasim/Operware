import { Component, OnInit } from '@angular/core';
import {Configuration} from '../../@core/models/configuration.model';
import {ConfigurationService} from '../../@core/services/configuration.service';
import notify from 'devextreme/ui/notify';

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
    this.configurationService.get().subscribe(configurations => {
      if (configurations === null) {
        return;
      }
      this.configuration = configurations[0];
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
