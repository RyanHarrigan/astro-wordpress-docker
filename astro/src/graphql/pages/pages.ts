import { fetchAPI } from '../core';

import type { PageFetchData } from './types.ts';

export async function getPageContent(pageSlug: string): Promise<PageFetchData['page'] | undefined> {
  const { page } = await fetchAPI<PageFetchData>(`
  query page {
    page(id: "${pageSlug}", idType: URI) {
      content
      date
      slug
      title
    }
  }
  `) ?? {};

  return page;
}
