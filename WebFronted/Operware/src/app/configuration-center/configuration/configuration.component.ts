import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../../@core/services/configuration.service';
import {Configuration} from '../../@core/models/configuration.model';
import notify from 'devextreme/ui/notify';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  configuration: Configuration;
  loadingVisible = false;
  constructor(protected configurationService: ConfigurationService) { }

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
        location.reload();
      }, error => {
        this.loadingVisible = false;
        notify(error.message, 'error');
        throw new Error(error);
      });
  }

  async delete() {
    try {
      console.log(this.configuration.id);
      await this.configurationService.delete(this.configuration.id).toPromise();
      notify('Конфигурация успешна удалена');
      localStorage.setItem('organization', null);
      location.reload();
    } catch (e) {
      console.error(e.message);
    }

  }
}
