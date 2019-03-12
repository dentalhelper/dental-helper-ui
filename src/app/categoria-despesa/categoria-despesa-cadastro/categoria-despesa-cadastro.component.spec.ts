import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDespesaCadastroComponent } from './categoria-despesa-cadastro.component';

describe('CategoriaDespesaCadastroComponent', () => {
  let component: CategoriaDespesaCadastroComponent;
  let fixture: ComponentFixture<CategoriaDespesaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaDespesaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDespesaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
