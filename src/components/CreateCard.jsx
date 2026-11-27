import Button from './Button.jsx'

export default function CreateCard() {
  return (
    <article className="flex flex-col justify-between gap-4 rounded-lg border border-border bg-white p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-medium text-black">Create catalog</h2>
        <p className="text-xs text-muted">Create new catalog to add products and generate content.</p>
      </div>
      <Button className="w-full">Create catalog</Button>
    </article>
  )
}
