import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

interface HeaderLink {
  label: string;
  href: string;
}

interface FooterContact {
  label: string;
  href: string;
  icon?: 'whatsapp' | 'mail' | 'link';
}

interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly profileName = 'Felipe Shai';

  protected readonly headerLinks: HeaderLink[] = [
    { label: 'Trajetória', href: '/trajetoria' },
    { label: 'Projetos', href: '/#projetos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contato' },
  ];

  protected readonly footerNavigation: FooterLink[] = [
    { label: 'Projetos', href: '/#projetos' },
    { label: 'Trajetória', href: '/trajetoria' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contato' },
  ];

  protected readonly footerContacts: FooterContact[] = [
    { label: 'WhatsApp · 71 99124-7146', href: 'https://wa.me/5571991247146', icon: 'whatsapp' },
    { label: 'felipe.shai@hotmail.com', href: 'mailto:felipe.shai@hotmail.com', icon: 'mail' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/felipeshai/', icon: 'link' },
    { label: 'GitHub', href: 'https://github.com/FelipeShai', icon: 'link' },
  ];
}
