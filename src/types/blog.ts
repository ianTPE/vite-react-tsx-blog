export interface Author {
  name: string;
  image?: string;
  bio?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: Author;
  coverImage?: string;
  ogImage?: string; // Open Graph 圖片
  tags: string[];
  readTime?: number; // 閱讀時間（分鐘）
}

export interface BlogPostContent extends BlogPost {
  renderContent: () => React.JSX.Element; // 函數返回 JSX 而不是存儲 Markdown
}
