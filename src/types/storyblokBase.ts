export interface Story {
  name: string;
  created_at: string;
  published_at: string;
  id: number;
  uuid: string;
  slug: string;
  full_slug: string;
  sort_by_date: string | null;
  position: number;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number | null;
  meta_data: unknown | null;
  group_id: string;
  first_published_at: string;
  release_id: number | null;
  lang: string;
  path: string | null;
  alternates: unknown[];
  default_full_slug: string | null;
  translated_slugs: unknown[] | null;
  content: unknown;
}

export interface StoryblokResponse {
  cv: number;
  rels: unknown[];
  links: unknown[];
  stories: unknown[];
}
