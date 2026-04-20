import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface CompanyItem {
  company: string;
  role: string;
  period: string;
}

@Component({
  selector: 'app-company-grid',
  imports: [],
  templateUrl: './company-grid.html',
  styleUrl: './company-grid.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyGrid {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly items = input.required<readonly CompanyItem[]>();
}
