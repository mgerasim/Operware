import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import {AuthService} from '../../@core/services/auth.service';
import {Router} from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth: any = { password: '' };

  showMessages: any = {};
  submitted = false;

  myRecaptcha: boolean;

  // https://bootsnipp.com/snippets/dldxB

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.auth.password.length === 0) {
      notify('Укажите пароль!', 'error');
      return;
    }
    if (!this.myRecaptcha) {
      notify('Пройдите reCaptcha', 'error');
      return;
    }

    const md5 = new Md5();

    const authToken = md5.appendStr(this.auth.password).end().toString();

    this.authService.get(authToken).subscribe(result => {
      console.log(result);
      if (result) {
        this.router.navigate(['configuration']).then();
        notify('Вход успешно выполнен');
        localStorage.setItem('authToken', authToken);
      } else {
        notify('Пароль неверный!', 'error');
      }
    });

  }
}
