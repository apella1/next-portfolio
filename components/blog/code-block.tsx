import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  language: string;
  children: string;
}

export function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <div className="my-4">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          borderRadius: '0.5rem',
          padding: '1rem',
          margin: '0',
          backgroundColor: 'rgb(40, 44, 52)', // oneDark background color
        }}
        showLineNumbers={true}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
