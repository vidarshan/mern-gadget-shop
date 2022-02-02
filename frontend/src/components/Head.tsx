import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

interface IHead {
  title?: string;
  description?: string;
  keywords?: string;
}
const Head: React.FC<PropsWithChildren<IHead>> = ({
  title,
  description,
  keywords,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

const defaultProps = {
  title: "Techstop | Buy tech gadgets",
  description: "Techstop, your best online tech store",
  keywords: "gadgets, tech, computers, phones, laptops, earphones",
};

Head.defaultProps = defaultProps;

export default Head;
