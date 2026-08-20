import { Component, inject } from '@angular/core';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { IconService } from '@services/iconService';
import { NgIcon, provideIcons } from '@ng-icons/core';
import * as socialIcons from '@shared/icons/socialIcons'
import { LanguageService } from '@services/languageService';

@Component({
  selector: 'app-greeting',
  imports: [NgxTypewriterComponent, NgIcon],
  templateUrl: './greeting.html',
  providers: [provideIcons(socialIcons)]
})
export class Greeting {
  protected skillIconService = inject(IconService);
  protected languageService = inject(LanguageService);
}
