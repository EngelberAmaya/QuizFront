import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInvitadoComponent } from './navbar-invitado.component';

describe('NavbarInvitadoComponent', () => {
  let component: NavbarInvitadoComponent;
  let fixture: ComponentFixture<NavbarInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarInvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
