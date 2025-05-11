import { lazy } from 'react';
import { type BlogPostContent } from '../types/blog';

// 靜態導入較小的文章組件
import FirstPostContent from '../components/blog/posts/FirstPost';
import SecondPostContent from '../components/blog/posts/SecondPost';

// 動態導入較大的文章組件
const LowCodeNoCodeMarketTrendsContent = lazy(() => import('../components/blog/posts/low-code-no-code-market-trends-2025-career-transition'));
const FreelancerGuidePost = lazy(() => import('../components/blog/posts/2025-freelancer-guide-low-code-no-code-development-applications-ranking'));
const AiPrdDevopsGuidePost = lazy(() => import('../components/blog/posts/ai-prd-devops-integration-guide-2025-new'));

// 文章內容將由 TSX 組件渲染而不是 Markdown
export const allPosts: BlogPostContent[] = [
  {
    slug: 'ai-prd-devops-integration-guide-2025',
    title: 'AI + PRD + DevOps：軟體開發智能化革命完整指南 2025',
    description: '深入探討 AI 如何與 PRD（產品需求文件）及 DevOps 結合，實現需求智能化、開發自動化、運維自適應化。涵蓋 10 大產業實際應用案例、技術架構、實施路線圖，幫助企業將軟體開發效率提升 50%。',
    date: '2025-05-11',
    author: {
      name: 'Ian Chou',
      image: '/images/author.png',
      bio: 'LC/NC開發者，AI 愛好者',
    },
    coverImage: '/images/202505/ai-prd-devops-integration-guide-2025.png',
    tags: ['AI', 'PRD', 'DevOps', '軟體開發智能化革命'],
    readTime: 15,
    ogImage: '/images/202505/ai-prd-devops-integration-guide-2025.png',
    renderContent: () => <AiPrdDevopsGuidePost />
  },
  {
    slug: '2025-freelancer-guide-low-code-no-code-development-applications-ranking',
    title: '【2025年自由工作者指南】低代碼/無代碼全端開發6大應用領域完整排名與市場前景分析',
    description: '隨著Gartner預測2025年70%的新企業應用將採用低代碼/無代碼技術建構，這個快速成長的領域為自由工作者帶來前所未有的機遇。本文深入分析了六大低代碼/無代碼應用領域——從MVP與快速原型開發到數據分析與儀表板——為自由工作者提供2025年最具前景的市場定位指南。透過全面的數據圖表、專案價格範圍、技能需求分析及市場趨勢預測，幫助您在這個預計2027年將達1476億美元規模的產業中，精準定位最適合您專業背景的高報酬領域。無論您是剛進入自由工作市場，還是尋求轉型的開發者，這份完整分析將是您制定職業策略的關鍵資源。',
    date: '2025-05-09',
    author: {
      name: 'Ian Chou',
      image: '/images/author.png',
      bio: 'LC/NC開發者，AI 愛好者',
    },
    coverImage: '/images/202505/2025-freelancer-guide-low-code-no-code-development-applications-ranking.png',
    tags: ['低代碼', '無代碼', '市場趨勢', '自由工作者', '轉型之路'],
    readTime: 15,
    ogImage: '/images/202505/2025-freelancer-guide-low-code-no-code-development-applications-ranking.png',
    renderContent: () => <FreelancerGuidePost />
  },
  {
    slug: 'low-code-no-code-market-trends-2025-career-transition',
    title: '【2025趨勢】低代碼/無代碼市場爆發：從企業高管到AI創業者的轉型之路',
    description: '探索低代碼/無代碼市場的爆發性成長與AI融合趨勢。在我多年的職業生涯中，從工程師到集團副總，再到創業者，分享如何在這個預計到2032年達2644億美元的新興領域中開創第二人生。本文深入分析平台類型、應用領域與市場機會，為資深專業人士提供轉型藍圖，展示如何結合豐富經驗與前沿技術，把握低代碼革命帶來的商業新機遇。',
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
