import { ReactNode } from "react";

interface Props {
  article?: ReactNode;
}

function Article({ article }: Props) {
  return <article className="max-w-[590px] my-0 mx-auto">{article}</article>;
}

export { Article };
