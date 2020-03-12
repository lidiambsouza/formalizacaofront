import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraruserComponent } from './cadastraruser.component';

describe('CadastraruserComponent', () => {
  let component: CadastraruserComponent;
  let fixture: ComponentFixture<CadastraruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
