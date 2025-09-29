import type { TextTypes, StoryblokRichTextNode } from "@storyblok/astro";
import type { Story, StoryblokResponse } from "./storyblokBase";

export type ProjectPost = {
  _uid: string;
  component: "projects";
  title: TextTypes;
  description: TextTypes;
  content: StoryblokRichTextNode<string>;
};

export interface ProjectStory extends Story {
  content: ProjectPost;
}

export interface ProjectStoriesResponse extends StoryblokResponse {
  stories: ProjectStory[];
}
