import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeTheme } from "../../utils/code-theme";

interface Props {
  children: ReactNode;
  language?: string;
}

function CodeTag({ children }: Props) {
  return <code className="font-mono">{children}</code>;
}

function PreTag({ children }: Props) {
  return (
    <pre className="font-mono py-4 px-5 md:py-5 md:px-6 mb-8 rounded-lg bg-indigo-90 block text-sm md:text-base overflow-scroll">
      {children}
    </pre>
  );
}

function CodeBlock({ children, language }: Props) {
  return (
    <SyntaxHighlighter
      CodeTag={CodeTag}
      language={language}
      PreTag={PreTag}
      style={codeTheme}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export { CodeBlock };
