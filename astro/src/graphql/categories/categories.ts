import _ from 'lodash';
import { fetchAPI } from '../core';
const { map, reject } = _; // @TODO tree shake


import type {
  Category,
  CategoriesFetchData,
  CategoryAndPosts,
  CategoryFetchData,
} from './types.ts';

export async function getCategories(): Promise<Category[]> {
  const { categories: fetchData } = await fetchAPI<CategoriesFetchData>(`
  query categories {
    categories {
      nodes {
        slug
        name
      }
    }
  }
  `) ?? {};

  const categories = map(fetchData?.nodes ?? [], ({ slug, name }) => {
    return {
      id: slug,
      name,
    }
  });

  return reject(categories, { id: 'uncategorized' });
}

export async function getCategory(categorySlug: string): Promise<CategoryAndPosts> {
  const { category: fetchData } = await fetchAPI<CategoryFetchData>(`
  query category {
    category(id: "${categorySlug}", idType: SLUG) {
      slug
      name
      posts {
        nodes {
          title
          content
          excerpt
        }
      }
    }
  }`) ?? {} as CategoryFetchData;

  const {
    slug = '',
    name = '',
    posts: fetchedPosts,
  } = fetchData;


  const posts = map(
    fetchedPosts?.nodes ?? [],
    ({title, content}) =>  ({title, content}),
  );

  return {
    id: slug,
    name,
    posts,
  }
}
