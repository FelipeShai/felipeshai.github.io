import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface EducationItem {
  institution: string;
  title: string;
  period: string;
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  readonly items = input.required<readonly EducationItem[]>();
}
