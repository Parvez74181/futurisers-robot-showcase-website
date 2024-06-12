export default function convertToSlug(title: string) {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s-]/g, "") // Remove non-word characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace consecutive hyphens with a single hyphen
    .trim(); // Trim leading/trailing hyphens
}
