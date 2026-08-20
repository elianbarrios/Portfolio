import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { IconService } from '@services/iconService';
import { LanguageService } from '@services/languageService';
import * as socialIcons from '@shared/icons/socialIcons'

@Component({
  selector: 'app-contact',
  imports: [NgIcon],
  templateUrl: './contact.html',
  providers: [provideIcons(socialIcons)]
})
export class Contact {
  private modalRef = viewChild<ElementRef<HTMLDialogElement>>('warning_modal');
  protected iconService = inject(IconService);
  protected languageService = inject(LanguageService);

  protected submitEmail(e: Event): void {
    e.preventDefault();

    const modal = this.modalRef()?.nativeElement;

    if (modal) {
      modal.showModal();
    }
  }
}
