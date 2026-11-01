// Turns the announcements list into HTML cards, grouped by area.
export function render(announcements) {
  const byArea = {};
  for (const a of announcements) (byArea[a.area] ??= []).push(a);
  return Object.entries(byArea)
    .map(([area, items]) => `
      <section>
        <h2>${area}</h2>
        ${items.map(a => `<article><h3>${a.name}</h3><p>${a.summary}</p></article>`).join("")}
      </section>`)
    .join("");
}
