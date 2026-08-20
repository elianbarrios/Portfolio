import { Injectable } from '@angular/core';
import { MySkills } from '@shared/data/custom-icons';
import { Icon } from '@interfaces/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private skills = MySkills;

  public getById(id: string): Icon | undefined {
    return this.skills.find(_id => id === _id.id);
  }

  public getAllSkills(): Icon[] {
    return this.skills.filter(s =>
      s.type === 'language' ||
      s.type === 'framework-library' ||
      s.type === 'database' ||
      s.type === 'tool' ||
      s.type === 'ia'
    );
  }

  public getLanguages(): Icon[] {
    return this.skills.filter(s => s.type === 'language');
  }

  public getFrameworksLibraries(): Icon[] {
    return this.skills.filter(s => s.type === 'framework-library');
  }

  public getDatabases(): Icon[] {
    return this.skills.filter(s => s.type === 'database');
  }

  public getTools(): Icon[] {
    return this.skills.filter(s => s.type === 'tool');
  }

  public getIAs(): Icon[] {
    return this.skills.filter(s => s.type === 'ia');
  }
}
