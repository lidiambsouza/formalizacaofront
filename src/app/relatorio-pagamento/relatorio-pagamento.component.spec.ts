import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPagamentoComponent } from './relatorio-pagamento.component';

describe('RelatorioPagamentoComponent', () => {
  let component: RelatorioPagamentoComponent;
  let fixture: ComponentFixture<RelatorioPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
