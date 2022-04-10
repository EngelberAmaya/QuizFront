import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSupervisorComponent } from './navbar-supervisor.component';

describe('NavbarSupervisorComponent', () => {
  let component: NavbarSupervisorComponent;
  let fixture: ComponentFixture<NavbarSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
