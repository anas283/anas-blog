const keyword = "text-[#c792ea]";
const name = "text-[#82aaff]";
const string = "text-[#c3e88d]";
const boolean = "text-[#f78c6c]";
const punctuation = "text-white/40";

export default function HeroCodeCard() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-[#151412] shadow-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-primary/10 to-transparent"
      />

      <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] tracking-wide text-white/40">
          anas.js
        </span>
        <span className="w-10" aria-hidden="true" />
      </div>

      <pre className="relative overflow-x-auto p-5 font-mono text-[11px] leading-6 sm:p-6 sm:text-[13px]">
        <code>
          <span className="block">
            <span className={keyword}>const</span>{" "}
            <span className={name}>anas</span>{" "}
            <span className={punctuation}>=</span>{" "}
            <span className={punctuation}>{"{"}</span>
          </span>
          <span className="block pl-4">
            <span className={name}>role</span>
            <span className={punctuation}>:</span>{" "}
            <span className={string}>&quot;Software Engineer&quot;</span>
            <span className={punctuation}>,</span>
          </span>
          <span className="block pl-4">
            <span className={name}>experience</span>
            <span className={punctuation}>:</span>{" "}
            <span className={string}>&quot;5+ years&quot;</span>
            <span className={punctuation}>,</span>
          </span>
          <span className="block pl-4">
            <span className={name}>stack</span>
            <span className={punctuation}>:</span>{" "}
            <span className={punctuation}>[</span>
            <span className={string}>&quot;React&quot;</span>
            <span className={punctuation}>,</span>{" "}
            <span className={string}>&quot;Next.js&quot;</span>
            <span className={punctuation}>,</span>{" "}
            <span className={string}>&quot;Angular&quot;</span>
            <span className={punctuation}>]</span>
            <span className={punctuation}>,</span>
          </span>
          <span className="block pl-4">
            <span className={name}>focus</span>
            <span className={punctuation}>:</span>{" "}
            <span className={punctuation}>[</span>
            <span className={string}>&quot;craft&quot;</span>
            <span className={punctuation}>,</span>{" "}
            <span className={string}>&quot;speed&quot;</span>
            <span className={punctuation}>,</span>{" "}
            <span className={string}>&quot;accessibility&quot;</span>
            <span className={punctuation}>]</span>
            <span className={punctuation}>,</span>
          </span>
          <span className="block pl-4">
            <span className={name}>openToWork</span>
            <span className={punctuation}>:</span>{" "}
            <span className={boolean}>true</span>
            <span className={punctuation}>,</span>
          </span>
          <span className="block">
            <span className={punctuation}>{"}"}</span>
            <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-primary motion-reduce:animate-none" />
          </span>
        </code>
      </pre>

      <div className="relative flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-[10px] text-white/40">
        <span>UTF-8</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          main
        </span>
      </div>
    </div>
  )
}
