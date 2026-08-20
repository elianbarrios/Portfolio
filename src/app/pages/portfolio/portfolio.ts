import { Component } from '@angular/core';
import { Navbar } from "@components/navbar/navbar";
import { Home } from "@components/home/home";
import { About } from "@components/about/about";
import { Skills } from "@components/skills/skills";
import { Footer } from "@components/footer/footer";
import { Projects } from "@components/projects/projects";
import { Contact } from "@components/contact/contact";
import { NgxFlickeringGridComponent } from '@omnedia/ngx-flickering-grid';
import { NgxParticlesComponent } from '@omnedia/ngx-particles';

@Component({
  selector: 'app-portfolio',
  imports: [Navbar, Home, About, Skills, Footer, Projects, Contact, NgxFlickeringGridComponent, NgxParticlesComponent],
  templateUrl: './portfolio.html',
})
export class Portfolio { }
