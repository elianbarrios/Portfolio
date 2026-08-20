import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageService } from '@services/languageService';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
})
export default class NotFound {
  protected languageService = inject(LanguageService);
}
