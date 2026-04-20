import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero } from './hero';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('profile', {
      role: 'Engineer',
      name: 'Test User',
      headline: 'Backend com enfase em Java',
      location: 'Remote',
      intro: 'Intro',
    });
    fixture.componentRef.setInput('primaryAction', { label: 'Ver projetos', href: '#projetos' });
    fixture.componentRef.setInput('socialLinks', [{ label: 'GitHub', href: 'https://example.com' }]);
    fixture.componentRef.setInput('metrics', [{ value: '4+', label: 'anos de experiencia' }]);
    fixture.componentRef.setInput('keyCompetencies', ['Java']);
    fixture.componentRef.setInput('availabilityText', 'Disponivel para projetos remotos');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
