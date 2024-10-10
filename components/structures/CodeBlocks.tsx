'use client'

import { ClipboardCheck, ClipboardCopy } from 'lucide-react';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight, materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeProps = {
  children: string; 
  language: string;
};

const CodeBlocks = ({ children, language }: CodeProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="code">
      <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <button className="icon copy-icon">
          {copied ? <ClipboardCheck /> : <ClipboardCopy />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={materialDark}>
          {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlocks;