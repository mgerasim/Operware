import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationVariableFormComponent } from './configuration-variable-form.component';

describe('ConfigurationVariableFormComponent', () => {
  let component: ConfigurationVariableFormComponent;
  let fixture: ComponentFixture<ConfigurationVariableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationVariableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationVariableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
