import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';
import {ConfigurationService} from '../@core/services/configuration.service';
import {Configuration} from '../@core/models/configuration.model';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Звонки',
      link: '/calls',
    },
    {
      title: 'События',
      link: '/calls/events',
    },
    {
      title: 'Конфигурация',
      expanded: true,
      children: [
        {
          title: 'AMI подключение',
          link: '/configuration',
        },
        {
          title: 'Привязка событий',
          link: '/configuration/event-binding',
        },
        {
          title: 'Переменные',
          link: '/configuration/variables',
        },
        {
          title: 'Обратный звонок',
          link: '/configuration/callback',
        }
      ],
    },
    {
      title: 'Обслуживание',
      link: '/service',
    },
    {
      title: 'Обратные звонки',
      link: '/calls/callbacks',
    }
  ];

  configurations: Configuration[];
  configuration: Configuration;
  constructor(private configurationService: ConfigurationService) { }

  get isEmptyOrganization(): boolean {
    return isNullOrUndefined(localStorage.getItem('organization')) || localStorage.getItem('organization') === 'null';
  }

  ngOnInit() {
    this.configurationService.get().subscribe(configurations => {
      this.configurations = configurations;
      if (!this.isEmptyOrganization) {
        this.configuration = this.configurations.find(x => x.id.toString() === localStorage.getItem('organization'));
        if (!this.configuration) {
          localStorage.setItem('organization', null);
        }
      }
    });
  }

}
