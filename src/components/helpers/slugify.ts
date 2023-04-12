export default function slugify(text: string) {
  return text.replace(/\s+/g, "_").toLowerCase()
}