import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrganizationComponent } from './menu-organization.component';

describe('MenuOrganizationComponent', () => {
  let component: MenuOrganizationComponent;
  let fixture: ComponentFixture<MenuOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
