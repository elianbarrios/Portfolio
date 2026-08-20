import { Component, computed, inject, signal } from '@angular/core';
import { NgxNumberTickerComponent } from '@omnedia/ngx-number-ticker';
import { LanguageService } from '@services/languageService';
import { Timeline } from "./timeline/timeline";

@Component({
  selector: 'app-about',
  imports: [NgxNumberTickerComponent, Timeline],
  templateUrl: './about.html',
})
export class About {
  protected languageService = inject(LanguageService);
  protected year = signal(new Date().getFullYear());
  private startDate = signal(new Date(2023, 11, 1));

  protected yearsOfExperience = computed(() => {
    const today = new Date();
    const start = this.startDate();

    let years = today.getFullYear() - start.getFullYear();

    const hasMonthPassed = today.getMonth() >= start.getMonth();
    if (!hasMonthPassed) {
      years--;
    }

    return years;
  });
}
