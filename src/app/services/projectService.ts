import { inject, Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { SupabaseService } from './supabaseService';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private supabaseClient = inject(SupabaseService).client;

  public async getProjectsWithBadges(): Promise<{ data: Project[] | null; error: any }> {
    const { data, error } = await this.supabaseClient
      .from('project')
      .select(`
        *,
        badge (
          id,
          name,
          description
        )
      `);

    return { data: data as Project[], error };
  }
}
