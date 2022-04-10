import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInvitadoComponent } from './home-invitado.component';

describe('HomeInvitadoComponent', () => {
  let component: HomeInvitadoComponent;
  let fixture: ComponentFixture<HomeInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
