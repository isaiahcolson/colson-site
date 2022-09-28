import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ArticleParagraph({ children }: Props) {
  return (
    <div className="pb-8 font-serif text-lg md:text-xl flex flex-col gap-8">
      {children}
    </div>
  );
}

function ArticleParagraphContainer({ children }: Props) {
  return <div className="pb-8 md:pb-12">{children}</div>;
}

export { ArticleParagraph, ArticleParagraphContainer };
