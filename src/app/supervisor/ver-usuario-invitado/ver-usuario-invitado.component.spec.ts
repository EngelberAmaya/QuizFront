import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerUsuarioInvitadoComponent } from './ver-usuario-invitado.component';

describe('VerUsuarioInvitadoComponent', () => {
  let component: VerUsuarioInvitadoComponent;
  let fixture: ComponentFixture<VerUsuarioInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerUsuarioInvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerUsuarioInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
