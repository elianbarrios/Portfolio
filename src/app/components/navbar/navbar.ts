import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageService } from '@services/languageService';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  protected languageService = inject(LanguageService);
}
