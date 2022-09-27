import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ArticleHeader({ children }: Props) {
  return (
    <>
      <h1 className="pt-12 md:pt-16 pb-2 md:pb-8">{children}</h1>

      <p className="font-serif text-xs md:text-sm">Written by Isaiah Colson</p>

      <hr className="my-12 md:my-16" />
    </>
  );
}

function ArticleSubHeader({ children }: Props) {
  return <h2 className="pb-6 md:pb-8">{children}</h2>;
}

export { ArticleHeader, ArticleSubHeader };
