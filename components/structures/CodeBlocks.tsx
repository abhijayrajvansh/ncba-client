"use client";

import { ClipboardCheck, ClipboardCopy } from "lucide-react";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlocksProps = {
  children: string;
  language: string;
  enableCopyToClipboard?: boolean;
};

const CodeBlocks = ({
  children,
  language,
  enableCopyToClipboard = false,
}: CodeBlocksProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="code">
      <div className="flex justify-end">
        {enableCopyToClipboard && (
          <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
            <button className="icon copy-icon">
              {copied ? (
                <ClipboardCheck className="text-green-500" />
              ) : (
                <ClipboardCopy />
              )}
            </button>
          </CopyToClipboard>
        )}
      </div>
      <SyntaxHighlighter language={language} style={gruvboxLight}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlocks;
