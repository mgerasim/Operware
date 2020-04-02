import { Component, OnInit } from '@angular/core';
import {Configuration} from '../../@core/models/configuration.model';
import {ConfigurationService} from '../../@core/services/configuration.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-configuration-callback',
  templateUrl: './configuration-callback.component.html',
  styleUrls: ['./configuration-callback.component.scss']
})
export class ConfigurationCallbackComponent implements OnInit {
  configuration: Configuration;

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
    this.configurationService.save(this.configuration).subscribe(res => {
      notify('Конфигурация успешна обновллена');
    }, error => {
      console.error(error);
      notify(error.messsage, 'error');
    });
  }
}
