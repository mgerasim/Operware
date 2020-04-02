import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationEventBindingComponent } from './configuration-event-binding.component';

describe('ConfigurationEventBindingComponent', () => {
  let component: ConfigurationEventBindingComponent;
  let fixture: ComponentFixture<ConfigurationEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
