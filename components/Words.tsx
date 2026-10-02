/** Splits a heading into masked words. Scroll mode: put `rvw` on the parent heading.
 *  `load` mode is for inner-page titles: words slide up one by one on page load (delay classes l1…). */
export function Words({ text, load }: { text: string; load?: boolean }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className={load ? `wd ld l${Math.min(i + 1, 15)}` : `wd w${Math.min(i, 12)}`}>{w}</span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
