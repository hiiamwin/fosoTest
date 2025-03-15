import { StaticImageData } from "next/image";

export type Author = {
  name: string;
  logo: StaticImageData;
};

export type SectionImage = {
  src: StaticImageData;
  alt: string;
};

export type ListItem = {
  item: string;
  color?: string;
  description?: string;
};

export type ParagraphContent = {
  type: "paragraph";
  content: string;
};

export type ListContent = {
  type: "list";
  content: ListItem[];
};

export type SubTitleContent = {
  type: "subTitle";
  content: string;
  subtitle?: string;
};

export type QouteContent = {
  type: "qoute";
  content: string;
};

export type Content =
  | ParagraphContent
  | ListContent
  | SubTitleContent
  | QouteContent;

export type Section = {
  title: string;
  contents: Content[];
  sectionImg?: SectionImage;
  authorIdea?: string;
};

export type BlogType = {
  tag: string;
  title: string;
  author: Author;
  updatedDate: string;
  readTime: string;
  introduction: string;
  sections: Section[];
};
