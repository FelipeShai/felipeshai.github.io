import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterContact {
  label: string;
  href: string;
  icon?: 'whatsapp' | 'mail' | 'link';
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class Footer {
  readonly name = input('Felipe Shai');
  readonly description = input(
    'Engenheiro de software focado em backend, produto e entrega sólida em times multidisciplinares.'
  );
  readonly location = input('Salvador, BA - Brasil');
  readonly navigation = input.required<readonly FooterLink[]>();
  readonly contacts = input.required<readonly FooterContact[]>();
}