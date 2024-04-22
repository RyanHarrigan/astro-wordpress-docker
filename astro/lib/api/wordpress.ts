const GRAPHQL_URL = import.meta.env.GRAPHQL_URL;
import { map, head } from 'lodash';

// from https://blog.openreplay.com/building-an-astro-website-with-wordpress-as-a-headless-cms/
async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

// @TODO test this graphql for actual data structure
export async function getPrimaryMenu() {
  const data = await fetchAPI(`
  {
    menus(where: {location: PRIMARY}) {
      nodes {
        menuItems {
          edges {
            node {
              path
              label
              connectedNode {
                node {
                  ... on Page {
                    isPostsPage
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `);

  const menuItems = map(head(data?.menus?.nodes), ({ item: { node: { label = '', path = '', connectedNode: { node: { slug = '' } = {}} = {} } = {}} = {}} = {}) => ({
    label,
    path,
    pageId: slug,
  }));

  return menuItems ?? [];
}
