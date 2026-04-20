import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface HeaderLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class Header {
  readonly name = input('Felipe Shai');
  readonly items = input.required<readonly HeaderLink[]>();
}
