import { Component, inject } from '@angular/core';
import { Greeting } from "./greeting/greeting";
import { NgxMarqueeComponent, OmMarqueeItemDirective } from "@omnedia/ngx-marquee";
import { NgxOrbComponent } from '@omnedia/ngx-orb';
import { NgIcon, provideIcons } from '@ng-icons/core';
import * as skillsIcons from '@shared/icons/skillIcons'
import { IconService } from '@services/iconService';

@Component({
  selector: 'app-home',
  imports: [Greeting, NgxMarqueeComponent, OmMarqueeItemDirective, NgxOrbComponent, NgIcon],
  templateUrl: './home.html',
  providers: [provideIcons(skillsIcons)]
})
export class Home {
  protected skillIconService = inject(IconService);
}
