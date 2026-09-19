/** Resolves a public-asset path (e.g. "images/mirage/foo.jpg") against Vite's configured base path. */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
