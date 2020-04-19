import { Component, OnInit } from '@angular/core';
import {AuthService} from '../@core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.setItem('authToken', '');
    this.router.navigate(['auth']).then();
  }
}
