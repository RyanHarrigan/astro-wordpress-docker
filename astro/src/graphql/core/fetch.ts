const GRAPHQL_URL = import.meta.env.GRAPHQL_URL;

// from https://blog.openreplay.com/building-an-astro-website-with-wordpress-as-a-headless-cms/
export async function fetchAPI<DataType>(query: string, { variables }: { variables?: any } = {}): Promise<DataType | undefined> {
  const headers = { 'Content-Type': 'application/json' };

  try {
    const res = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res?.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }

    return json.data;
  } catch(e) {
    new Error('Failed to fetch API');
  }

  return;
}
