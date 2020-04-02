import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationCallbackComponent } from './configuration-callback.component';

describe('ConfigurationCallbackComponent', () => {
  let component: ConfigurationCallbackComponent;
  let fixture: ComponentFixture<ConfigurationCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
