import helloWorld from './hello-world.json';

export interface TutorialContent {
  type: 'paragraph' | 'code' | 'playground';
  text?: string;
  language?: string;
  code?: string;
  tool?: string;
  props?: any;
}

export interface Tutorial {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: TutorialContent[];
}

export const tutorials: Tutorial[] = [helloWorld];
