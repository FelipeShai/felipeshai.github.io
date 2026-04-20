import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface ProfileData {
  name: string;
  role: string;
  headline: string;
  location: string;
  intro: string;
}

interface ActionLink {
  label: string;
  href: string;
}

interface HeroMetric {
  value: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly profile = input.required<ProfileData>();
  readonly primaryAction = input.required<ActionLink>();
  readonly socialLinks = input.required<readonly ActionLink[]>();
  readonly metrics = input.required<readonly HeroMetric[]>();
  readonly keyCompetencies = input.required<readonly string[]>();
  readonly availabilityText = input<string | null>(null);
}
