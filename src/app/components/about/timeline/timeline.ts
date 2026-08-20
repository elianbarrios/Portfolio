import { Component, inject } from '@angular/core';
import { LanguageService } from '@services/languageService';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
})
export class Timeline {
  protected languageService = inject(LanguageService);
}
