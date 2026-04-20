import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  homeAvailabilityText,
  homeBlogHighlights,
  homeCompanySection,
  homeHeroCompetencies,
  homeHeroMetrics,
  homePrimaryAction,
  homeProfile,
  homeShowcaseItems,
  homeSocialLinks,
  homeTrajectoryPreview,
} from './home.content';
import { CompanyGrid } from './components/company-grid/company-grid';
import { Hero } from './components/hero/hero';
import { Showcase } from './components/showcase/showcase';

@Component({
  selector: 'app-home',
  imports: [Hero, CompanyGrid, Showcase],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly profile = homeProfile;
  protected readonly primaryAction = homePrimaryAction;
  protected readonly socialLinks = homeSocialLinks;

  protected readonly trajectoryEyebrow = homeTrajectoryPreview.eyebrow;
  protected readonly trajectoryTitle = homeTrajectoryPreview.title;
  protected readonly trajectoryDescription = homeTrajectoryPreview.description;
  protected readonly trajectoryActionLabel = homeTrajectoryPreview.actionLabel;
  protected readonly trajectoryActionHref = homeTrajectoryPreview.actionHref;

  protected readonly heroMetrics = homeHeroMetrics;
  protected readonly heroCompetencies = homeHeroCompetencies;
  protected readonly availabilityText = homeAvailabilityText;

  protected readonly companyEyebrow = homeCompanySection.eyebrow;
  protected readonly companyTitle = homeCompanySection.title;
  protected readonly companyItems = homeCompanySection.items;

  protected readonly showcaseItems = homeShowcaseItems;
  protected readonly blogHighlights = homeBlogHighlights;
}
