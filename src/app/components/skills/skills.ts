import { Component, inject, signal, computed } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { IconService } from '@services/iconService';
import { Language, LanguageService } from '@services/languageService';
import * as skillsIcons from '@shared/icons/skillIcons'

type tabItem = 'languages' | 'frameworks-libraries' | 'databases' | 'tools' | 'ia';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  imports: [NgIcon],
  providers: [provideIcons(skillsIcons)]
})
export class Skills {
  protected iconService = inject(IconService);
  protected languageService = inject(LanguageService);
  protected currentTab = signal<tabItem>('languages');
  protected tabs = signal<tabItem[]>(['languages', 'frameworks-libraries', 'databases', 'tools', 'ia']);
  private readonly tabLabels: Record<Language, Record<tabItem, string>> = {
    en: {
      languages: 'Languages',
      'frameworks-libraries': 'Frameworks & Libraries',
      databases: 'Databases',
      tools: 'Tools',
      ia: 'IA'
    },
    es: {
      languages: 'Lenguajes',
      'frameworks-libraries': 'Frameworks y Librerías',
      databases: 'Bases de datos',
      tools: 'Herramientas',
      ia: 'IA'
    }
  };

  protected currentIcons = computed(() => {
    const tab = this.currentTab();

    switch (tab) {
      case 'languages': return this.iconService.getLanguages();
      case 'frameworks-libraries': return this.iconService.getFrameworksLibraries();
      case 'databases': return this.iconService.getDatabases();
      case 'tools': return this.iconService.getTools();
      case 'ia': return this.iconService.getIAs();
      default: return [];
    }
  });

  protected changeCurrentTab(tab: tabItem): void {
    this.currentTab.set(tab);
  }

  protected getTabLabel(tab: tabItem): string {
    return this.tabLabels[this.languageService.currentLanguage()][tab];
  }
}
