import React from "react";
import { NextSeo } from "next-seo";

interface SEOProps {
  title: string;
}

export const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <>
      <NextSeo title={`${title} - doctor app`} description="A short description goes here." />
    </>
  );
};


