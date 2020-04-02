import {Component, Input, OnInit} from '@angular/core';
import {Call} from '../../../@core/models/call.model';
import {VariableService} from '../../../@core/services/variable.service';
import {Variable} from '../../../@core/models/variable.model';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {
  @Input() call: Call;
  variables: Variable[];
  constructor(private variableService: VariableService) { }

  ngOnInit() {
    this.variableService.get(this.call.pbx_call_id).subscribe(variables => {
      if (variables === null) {
        return;
      }
      console.log(variables);
      this.variables = variables;
    });
  }

}
