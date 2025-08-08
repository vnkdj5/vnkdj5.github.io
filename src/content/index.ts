export const RESUME = await (async () => {
  // Using dynamic import to allow Vite to bundle JSON
  const data = await import("./resume.json");
  return data.default;
})();
export type Resume = typeof RESUME;
