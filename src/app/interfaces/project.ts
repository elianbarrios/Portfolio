import { Badge } from "./badge";

export interface Project {
  id: number;
  title: string;
  title_es?: string;
  description: string;
  description_es?: string;
  img_url: string;
  github_url?: string;
  project_url?: string;
  badge: Badge[];
}
