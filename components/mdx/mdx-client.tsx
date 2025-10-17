"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef, useState } from "react";
import { highlight } from "sugar-high";
import { Check, Copy } from "lucide-react";

// Client-only MDX helper components

export type HeadingProps = ComponentPropsWithoutRef<"h1">;
export type ParagraphProps = ComponentPropsWithoutRef<"p">;
export type ListProps = ComponentPropsWithoutRef<"ul">;
export type ListItemProps = ComponentPropsWithoutRef<"li">;
export type AnchorProps = ComponentPropsWithoutRef<"a">;
export type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

export const Pre = (props: ComponentPropsWithoutRef<"pre">) => {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = (props as any).children?.props?.children;

  const handleCopy = async () => {
    if (typeof textToCopy === "string") {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <div className="relative group my-4">
      <pre
        {...props}
        className={`${props.className ?? ""} bg-gray-100 dark:bg-gray-900 rounded-md p-4 overflow-x-auto`}
      />
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded-md bg-gray-800 text-gray-200 opacity-0 group-hover:opacity-100 transition-all hover:bg-gray-700"
        aria-label="Copy code"
        type="button"
      >
        {isCopied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  );
};

export const Callout = (props: BlockquoteProps) => {
  return (
    <blockquote
      className="my-4 border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-gray-800 dark:border-blue-400"
      {...props}
    />
  );
};

export const Code = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"code">) => {
  const codeHTML = highlight(children as string);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

export const Anchor = ({ href, children, ...props }: AnchorProps) => {
  const className =
    "text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2 decoration-blue-500 dark:decoration-blue-400";
  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }
  if (href?.startsWith("#")) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};
