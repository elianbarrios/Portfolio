import { Component, inject, OnInit, signal } from '@angular/core';
import { ProjectService } from '../../services/projectService';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoOctocat, ionArrowUpRightBoxOutline } from '@ng-icons/ionicons';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  imports: [NgxFadeComponent, NgIcon],
  templateUrl: './projects.html',
  providers: [provideIcons({ionLogoOctocat}), provideIcons({ionArrowUpRightBoxOutline})]
})
export class Projects {
  private projectService = inject(ProjectService);
  protected projects = signal<Project[]>([]);

  public async ngOnInit() {
    await this.loadProjects();
  }

  protected async loadProjects() {
    const { data, error } = await this.projectService.getProjectsWithBadges();

    console.log(data);

    if (error) {
      console.error('Error fetching projects:', error);
      return;
    }

    if (data) {
      this.projects.set(data);
    }
  }
}
