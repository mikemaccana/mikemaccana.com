"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3";

type LinkedHeadingProps = {
  title: string;
  level: HeadingLevel;
  className?: string;
  children: ReactNode;
};

export function headingId(title: string) {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function CopyAnchorLink({ anchor, title }: { anchor: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    const url = new URL(window.location.href);
    url.hash = anchor;
    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      className="copy-anchor-link"
      type="button"
      aria-label={copied ? `Link copied for ${title}` : `Copy link to ${title}`}
      title={copied ? "Link copied" : "Copy link"}
      onClick={copyLink}
    >
      {copied ? (
        <svg aria-hidden="true" viewBox="0 0 16 16">
          <path d="m3 8 3.2 3.2L13 4.5" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 16 16">
          <path d="M6.2 9.8 9.8 6.2M5.1 11.9l-1 .9a3 3 0 0 1-4.2-4.2l3-3a3 3 0 0 1 4.2 0M10.9 4.1l1-.9a3 3 0 0 1 4.2 4.2l-3 3a3 3 0 0 1-4.2 0" transform="translate(.5 .5) scale(.94)" />
        </svg>
      )}
    </button>
  );
}

export function LinkedHeading({ title, level, className, children }: LinkedHeadingProps) {
  const Tag = level;
  const id = headingId(title);

  return (
    <div className="linked-heading">
      <Tag id={id} className={className}>
        {children}
      </Tag>
      <CopyAnchorLink anchor={id} title={title} />
    </div>
  );
}
