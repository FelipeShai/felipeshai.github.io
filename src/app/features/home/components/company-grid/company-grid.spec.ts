import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGrid } from './company-grid';

describe('CompanyGrid', () => {
  let component: CompanyGrid;
  let fixture: ComponentFixture<CompanyGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyGrid);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('eyebrow', 'Empresas');
    fixture.componentRef.setInput('title', 'Marcas e times em que atuei');
    fixture.componentRef.setInput('items', [
      { company: 'PagBank', role: 'Engenheiro de Software', period: 'Mar 2024 - Fev 2026' },
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
