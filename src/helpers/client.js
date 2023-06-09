import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '1',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
