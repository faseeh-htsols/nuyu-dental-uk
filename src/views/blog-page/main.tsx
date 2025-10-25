import React from "react";
import Banner from "./banner";
import ContentSections from "./content-sections";
import AuthorCard from "./author-card";

type Section = {
  heading?: string;
  content: string;
};

type Author = {
  name: string;
  pictureUrl: string;
  bio: string;
  scheduledDate: string;
};

export type BlogPost = {
  title: string;
  pictureUrl: string;
  scheduledDate?: string;
  sections: Section[];
  author: Author;
  contentHtml: JSON;
};

function Main({ data }: { data: BlogPost }) {
  return (
    <div>
      <Banner title={data.title} image={data.pictureUrl} />
      <ContentSections sections={data.sections} />
      <AuthorCard author={data.author} date={data.scheduledDate} />
    </div>
  );
}

export default Main;
