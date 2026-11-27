export default function CatalogCard({ title, tags, date, products }) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-border bg-white p-4">
      <header className="flex items-start justify-between gap-2">
        <h2 className="text-base font-semibold text-black">{title}</h2>
        <button type="button" aria-label="More options" className="text-muted">
          ...
        </button>
      </header>
      <ul className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <li key={tag} className="rounded border border-tag bg-grey-light px-2 text-xs text-black">
            {tag}
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted">Created on {date}</p>
      <p className="text-sm font-medium text-black">{products} products</p>
    </article>
  )
}
