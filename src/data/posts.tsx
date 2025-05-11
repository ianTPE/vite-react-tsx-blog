import { type BlogPostContent } from '../types/blog';
import FirstPostContent from '../components/blog/posts/FirstPost';
import SecondPostContent from '../components/blog/posts/SecondPost';
import LowCodeNoCodeMarketTrendsContent from '../components/blog/posts/low-code-no-code-market-trends-2025-career-transition';

// 文章內容將由 TSX 組件渲染而不是 Markdown
export const allPosts: BlogPostContent[] = [
  {
    slug: 'low-code-no-code-market-trends-2025-career-transition',
    title: '【2025趨勢】低代碼/無代碼市場爆發：從企業高管到AI創業者的轉型之路',
    description: '探索低代碼/無代碼市場的爆發性成長與AI融合趨勢。從我50多年的職業生涯，工程師到集團副總，再到創業者，分享如何在這個預計到2032年達2644億美元的新興領域中開創第二人生。本文深入分析平台類型、應用領域與市場機會，為資深專業人士提供轉型藍圖，展示如何結合豐富經驗與前沿技術，把握低代碼革命帶來的商業新機遇。',
    date: '2025-05-08',
    author: {
      name: 'Ian Chou',
      image: '/images/author.png',
      bio: 'LC/NC開發者，AI 愛好者',
    },
    coverImage: '/images/202505/low-code-no-code-market-trends-2025-career-transition.png',
    tags: ['低代碼', '無代碼', '市場趨勢', '轉型之路'],
    readTime: 10,
    ogImage: '/images/202505/low-code-no-code-market-trends-2025-career-transition.png', // 使用封面圖片作為 OG 圖片
    renderContent: () => <LowCodeNoCodeMarketTrendsContent />
  },
  {
    slug: 'second-post',
    title: 'TypeScript 與 React 的最佳實踐',
    description: '探索在 React 專案中使用 TypeScript 的有效方法',
    date: '2025-05-11',
    author: {
      name: 'Ian Chou',
      image: '/images/author.png',
      bio: 'LC/NC開發者，AI 愛好者',
    },
    coverImage: '/images/second-post.jpg',
    ogImage: '/images/second-post.jpg', // 使用封面圖片作為 OG 圖片
    tags: ['TypeScript', 'React', '最佳實踐'],
    readTime: 7,
    renderContent: () => <SecondPostContent />
  },
  {
    slug: 'first-post',
    title: '使用 Vite + React 建立部落格',
    description: '學習如何使用 Vite、React 和 TypeScript 建立現代化部落格',
    date: '2025-05-11',
    author: {
      name: 'Ian Chou',
      image: '/images/author.png',
      bio: 'LC/NC開發者，AI 愛好者',
    },
    coverImage: '/images/first-post.jpg',
    ogImage: '/images/first-post.jpg', // 使用封面圖片作為 OG 圖片
    tags: ['Vite', 'React', 'TypeScript'],
    readTime: 5,
    renderContent: () => <FirstPostContent />
  },
];

// 通過 slug 獲取文章
export const getPostBySlug = (slug: string): BlogPostContent | undefined => {
  return allPosts.find(post => post.slug === slug);
};

// 獲取所有文章元數據（不包含內容）
export const getAllPosts = (): BlogPostContent[] => {
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
