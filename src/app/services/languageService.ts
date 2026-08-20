import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'es';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'portfolio-language';
  private readonly language = signal<Language>('en');
  public readonly currentLanguage = this.language.asReadonly();

  constructor() {
    const storedLanguage = this.getStoredLanguage();
    if (storedLanguage) {
      this.language.set(storedLanguage);
    }
    this.updateHtmlLang(this.language());
  }

  public toggleLanguage(): void {
    const nextLanguage: Language = this.language() === 'en' ? 'es' : 'en';
    this.language.set(nextLanguage);
    this.saveLanguage(nextLanguage);
    this.updateHtmlLang(nextLanguage);
  }

  private updateHtmlLang(language: Language): void {
    if (typeof globalThis.document !== 'undefined') {
      globalThis.document.documentElement.lang = language;
    }
  }

  private getStoredLanguage(): Language | null {
    if (typeof globalThis.localStorage === 'undefined') {
      return null;
    }

    const saved = globalThis.localStorage.getItem(this.storageKey);
    return saved === 'en' || saved === 'es' ? saved : null;
  }

  private saveLanguage(language: Language): void {
    if (typeof globalThis.localStorage === 'undefined') {
      return;
    }

    globalThis.localStorage.setItem(this.storageKey, language);
  }
}
