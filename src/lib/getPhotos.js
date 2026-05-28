/**
 * Resolves a unified photo array from any business.json structure.
 *
 * Priority order:
 * 1. content.gallery (if it's an array with url fields)
 * 2. business.photos (Google Maps photos array with photo_url fields)
 * 3. business.main_photo_url (single main photo)
 * 4. Fallback — always returns at least one neutral image
 *
 * Always returns: [{ url, title, category }]
 */

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop";

export function getPhotos(business = {}, content = {}) {
  // 1. content.gallery array (manual / AI-generated)
  if (Array.isArray(content.gallery) && content.gallery.length > 0) {
    const photos = content.gallery.map(p => ({
      url: p.url || p.photo_url || "",
      title: p.title || business.name || "Gallery",
      category: p.category || "Showcase"
    })).filter(p => p.url);
    if (photos.length > 0) return photos;
  }

  // 2. business.photos (Google Maps format)
  if (Array.isArray(business.photos) && business.photos.length > 0) {
    const photos = business.photos.map(p => ({
      url: p.photo_url || "",
      title: business.name || "Gallery",
      category: "Showcase"
    })).filter(p => p.url);
    if (photos.length > 0) return photos;
  }

  // 3. Single main_photo_url
  if (business.main_photo_url) {
    return [{
      url: business.main_photo_url,
      title: business.name || "Gallery",
      category: "Showcase"
    }];
  }

  // 4. Always return a fallback so hero/about never get a blank slot
  return [{
    url: FALLBACK_IMAGE,
    title: business.name || "Gallery",
    category: "Showcase",
    isFallback: true
  }];
}
