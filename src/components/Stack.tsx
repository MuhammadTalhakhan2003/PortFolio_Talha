export function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack" aria-label="Technologies">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  )
}
