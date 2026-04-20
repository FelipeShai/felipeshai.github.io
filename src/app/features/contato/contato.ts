import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contatoChannels, contatoHero } from './contato.content';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contato {
  protected readonly hero = contatoHero;
  protected readonly channels = contatoChannels;
}