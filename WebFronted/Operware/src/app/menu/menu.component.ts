import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

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
      title: 'Сообщения',
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
      title: 'Обратные звонки',
      link: '/calls/callbacks',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
