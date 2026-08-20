import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { IconService } from '@services/iconService';
import { LanguageService } from '@services/languageService';
import * as socialIcons from '@shared/icons/socialIcons'

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgIcon],
  templateUrl: './footer.html',
  providers: [provideIcons(socialIcons)]
})
export class Footer {
  protected iconService = inject(IconService);
  protected languageService = inject(LanguageService);
  protected year = signal<number>(new Date().getFullYear())
}
