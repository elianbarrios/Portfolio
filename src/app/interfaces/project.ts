import { Badge } from "./badge";

export interface Project {
  id: number;
  title: string;
  description: string;
  img_url: string;
  github_url?: string;
  project_url?: string;
  badge: Badge[];
}
