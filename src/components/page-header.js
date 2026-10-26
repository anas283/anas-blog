export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <header className="border-b border-border/70 pb-10 sm:pb-12">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {children}
      </div>
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          {description}
        </p>
      )}
    </header>
  )
}
