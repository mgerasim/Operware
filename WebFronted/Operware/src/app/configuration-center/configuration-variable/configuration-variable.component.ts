import { Component, OnInit } from '@angular/core';
import {ConfigurationVariable} from '../../@core/models/configurationVariable.model';
import {ConfigurationVariableService} from '../../@core/services/configurationVariable.service';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-configuration-variable',
  templateUrl: './configuration-variable.component.html',
  styleUrls: ['./configuration-variable.component.scss']
})
export class ConfigurationVariableComponent implements OnInit {
  configurationVariables: ConfigurationVariable[];
  popupVisible = false;
  configurationVariable: ConfigurationVariable;
  constructor(private configurationVariableService: ConfigurationVariableService) { }

  ngOnInit() {
    const id = localStorage.getItem('organization');
    if (isNullOrUndefined(id)) {
      throw new Error('Не найдена кнфигурация в хранилище');
    }
    this.configurationVariableService.get(parseInt(id)).subscribe(configurationVariables => {
      if (configurationVariables === null) {
        return;
      }
      console.log(configurationVariables);
      this.configurationVariables = configurationVariables;
    });
  }

  add() {
    this.popupVisible = true;
  }

  save($event: ConfigurationVariable) {
    console.log($event);
    this.popupVisible = false;
    location.reload();
  }

  edit(data: any) {
    console.log(data);
    this.configurationVariable = data;
    this.popupVisible = true;
  }
}
