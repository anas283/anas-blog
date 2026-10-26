'use client'

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-9 items-center gap-2 rounded-full border border-border px-4 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/25 hover:bg-muted hover:text-foreground"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
