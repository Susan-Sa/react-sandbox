export const { API_BASE_URL } = process.env;
export const FEATURED_CATEGORY_ID = 3;
const BANNER_CATEGORY_ID = 9;
export const POSTS_API_URL = `${API_BASE_URL}/wp-json/wp/v2/posts`;
export const ALL_POSTS_API_URL = `${POSTS_API_URL}?per_page=100`;
export const POSTS_WITH_IMAGES_API_URL = `${API_BASE_URL}/wp-json/wp/v2/posts?per_page=100&_embed`;
export const FEATURED_CATEGORIES_API_URL = `${API_BASE_URL}/wp-json/wp/v2/categories?parent=${FEATURED_CATEGORY_ID}`;
export const BANNER_POSTS_API_URL = `${API_BASE_URL}/wp-json/wp/v2/posts?categories=${BANNER_CATEGORY_ID}&_embed&acf_format=standard`;
export const FEATURED_POSTS_API_URL = `${API_BASE_URL}/wp-json/wp/v2/posts?categories=${FEATURED_CATEGORY_ID}&_embed&acf_format=standard`;
export const MEDIA_API_URL = `${API_BASE_URL}/wp-json/wp/v2/media`;
export const PAGES_API_URL = `${API_BASE_URL}/wp-json/wp/v2/pages`;
