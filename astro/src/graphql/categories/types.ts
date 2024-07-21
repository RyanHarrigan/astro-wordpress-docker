export type CategoriesFetchData = {
  categories: {
    nodes: {
      slug: string;
      name: string;
    }[];
  };
}

export type Category = {
  id: string;
  name: string;
}

export type CategoryFetchData = {
  category: {
    slug: string;
    name: string;
    posts: {
      nodes: {
        title: string;
        content: string;
        excerpt: string;
      }[];
    };
  };
}

export type CategoryAndPosts = Category & {
  posts: {
    title: string;
    content: string;
  }[];
}
