export type PageFetchData = {
  page: {
    content: string;
    date: string;
    slug: string;
    title: string;
  }
}

export type Page = PageFetchData['page'];
