import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfigurationVariable} from '../../../@core/models/configurationVariable.model';
import {ConfigurationVariableService} from '../../../@core/services/configurationVariable.service';

@Component({
  selector: 'app-configuration-variable-form',
  templateUrl: './configuration-variable-form.component.html',
  styleUrls: ['./configuration-variable-form.component.scss']
})
export class ConfigurationVariableFormComponent implements OnInit {
  @Input() configurationVariable: ConfigurationVariable;
  @Output() apply = new EventEmitter();
  constructor(private configurationVariableService: ConfigurationVariableService) { }

  ngOnInit() {
    if (!this.configurationVariable) {
      this.configurationVariable = new ConfigurationVariable();
      this.configurationVariable.configurationId = parseInt(localStorage.getItem('organization'));
    }

  }

  save() {
      console.log(this.configurationVariable);
      if (this.configurationVariable.id > 0) {
        this.configurationVariableService.update(this.configurationVariable).subscribe(res => {
          this.apply.emit(this.configurationVariable);
        }, err => {
          console.error(err);
        });
      } else {
        this.configurationVariableService.add(this.configurationVariable).subscribe(res => {
          console.log(res);
          this.apply.emit(this.configurationVariable);
        }, err => {
          console.error(err);
        });
      }
  }
}
