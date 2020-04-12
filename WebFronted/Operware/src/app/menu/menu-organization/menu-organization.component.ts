import {Component, Input, OnInit} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {Configuration} from '../../@core/models/configuration.model';
import {ConfigurationService} from '../../@core/services/configuration.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-menu-organization',
  templateUrl: './menu-organization.component.html',
  styleUrls: ['./menu-organization.component.scss']
})
export class MenuOrganizationComponent implements OnInit {
  @Input() organization: Configuration;
  @Input() organizations: Configuration[];
  get isEmptyOrganization(): boolean {
    return isNullOrUndefined(localStorage.getItem('organization')) || localStorage.getItem('organization') === 'null';
  }
  get title(): string {
    return this.isEmptyOrganization ? 'Выберите организацию' : this.organization.titleOrganization;
  }
  popupVisible = false;

  constructor(private configurationService: ConfigurationService) { }


  ngOnInit() {

  }

  add() {
    this.popupVisible = true;
    this.organization = new Configuration();
  }

  async save() {
    try {
      console.log(this.organization);
      const res = await this.configurationService.add(this.organization).toPromise();
      console.log(res);
      localStorage.setItem('organization', res.id.toString());
      this.popupVisible = false;
      location.reload();

    } catch (e) {
      console.error(e);
      notify(e.message, 'error');
    }
  }

  change(item: Configuration) {
    console.log(item);
    localStorage.setItem('organization', item.id.toString());
    location.reload();
  }
}
