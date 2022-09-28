import React, { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { codeTheme } from "../../utils/code-theme";

interface Props {
  children: ReactNode;
  language?: string;
}

function PreTag({ children }: Props) {
  return (
    <pre className="py-4 px-5 md:py-5 md:px-6 mb-8 rounded-lg bg-[#f7f6f3] block text-base md:text-lg">
      {children}
    </pre>
  );
}

function CodeBlock({ children, language }: Props) {
  return (
    <SyntaxHighlighter
      language={language}
      PreTag={PreTag}
      // TODO: switch out codeTheme for custom styles
      // style={codeTheme}
      wrapLongLines={true}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export { CodeBlock };
