import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalizacaoComponent } from './formalizacao.component';

describe('FormalizacaoComponent', () => {
  let component: FormalizacaoComponent;
  let fixture: ComponentFixture<FormalizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormalizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
