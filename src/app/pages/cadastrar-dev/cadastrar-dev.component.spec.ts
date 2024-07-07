import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDevComponent } from './cadastrar-dev.component';

describe('CadastrarDevComponent', () => {
  let component: CadastrarDevComponent;
  let fixture: ComponentFixture<CadastrarDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarDevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
