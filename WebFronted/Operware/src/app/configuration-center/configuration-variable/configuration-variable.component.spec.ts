import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationVariableComponent } from './configuration-variable.component';

describe('ConfigurationVariableComponent', () => {
  let component: ConfigurationVariableComponent;
  let fixture: ComponentFixture<ConfigurationVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
