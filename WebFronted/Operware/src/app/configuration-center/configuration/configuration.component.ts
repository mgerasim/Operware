import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../../@core/services/configuration.service';
import {Configuration} from '../../@core/models/configuration.model';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
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
  constructor(protected configurationService: ConfigurationService) { }

  ngOnInit() {
    this.configurationService.get().subscribe(configurations => {
      console.log(configurations);
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
