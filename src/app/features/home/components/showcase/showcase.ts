import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface ShowcaseItem {
  tag: string;
  title: string;
  description: string;
  href?: string;
  actionLabel?: string;
}

@Component({
  selector: 'app-showcase',
  imports: [],
  templateUrl: './showcase.html',
  styleUrl: './showcase.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Showcase {
  readonly sectionId = input.required<string>();
  readonly title = input.required<string>();
  readonly items = input.required<readonly ShowcaseItem[]>();
  readonly twoColumns = input(false);
  readonly narrowCards = input(false);
}
