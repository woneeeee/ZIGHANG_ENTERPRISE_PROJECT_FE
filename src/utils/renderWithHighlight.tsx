export function renderWithHighlight(line: string) {
  const parts = line.split(/(\[\[.*?\]\])/g)
  return parts.map((part, i) => {
    const m = part.match(/^\[\[(.*)\]\]$/)
    if (m) {
      return (
        <span key={i} className="text-purple-200">
          {m[1]}
        </span>
      )
    }
    return <span key={i}>{part}</span>
  })
}
