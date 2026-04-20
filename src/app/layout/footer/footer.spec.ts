import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('navigation', [
      { label: 'Projetos', href: '/#projetos' },
    ]);
    fixture.componentRef.setInput('contacts', [
      { label: 'WhatsApp · 71 99124-7146', href: 'https://wa.me/5571991247146', icon: 'whatsapp' },
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});