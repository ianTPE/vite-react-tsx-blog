# Vite + React + TypeScript 部落格

一個使用 Vite、React 和 TypeScript 建立的現代化部落格網站。

## 特性

- ⚡️ **Vite** - 極快的開發伺服器和建構工具
- ⚛️ **React 19** - 最新版本的 React
- 🔷 **TypeScript** - 類型安全的 JavaScript
- 🎨 **Tailwind CSS v4** - 實用優先的 CSS 框架
- 🔀 **React Router** - 客戶端路由
- 📝 **組件化部落格文章** - 使用 TSX 組件而非 Markdown
- 🧪 **Vitest** - 由 Vite 驅動的極速單元測試框架
- 🔍 **Vite Plugin Inspect** - 可視化分析構建產物
- 🔥 **HMR** - 熱模塊替換，即時預覽更改

## 部落格結構

本部落格採用組件化的架構，每篇文章都是獨立的 React 組件：

- **文章數據** - 存儲在 `src/data/posts.ts`
- **文章內容** - 位於 `src/components/blog/posts/` 目錄
- **布局組件** - 位於 `src/components/layout/` 目錄
- **頁面組件** - 位於 `src/pages/` 目錄

## 開始使用

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開發伺服器會在 `http://localhost:5173` 啟動。

### 建構專案

```bash
npm run build
```

### 預覽建構結果

```bash
npm run preview
```

## 測試

### 執行測試

```bash
npm test
```

### 測試 UI 介面

```bash
npm run test:ui
```

### 測試覆蓋率報告

```bash
npm run test:coverage
```

## 添加新文章

1. 在 `src/components/blog/posts/` 創建新的 TSX 文件
2. 在 `src/data/posts.ts` 添加文章元數據
3. 導入新的文章組件

例如：

```typescript
// src/components/blog/posts/NewPost.tsx
import React from 'react';

const NewPost: React.FC = () => {
  return (
    <div className="post-content">
      <p>您的文章內容...</p>
    </div>
  );
};

export default NewPost;
```

```typescript
// src/data/posts.ts
import NewPostContent from '../components/blog/posts/NewPost';

export const allPosts: BlogPostContent[] = [
  // ... 其他文章
  {
    slug: 'new-post',
    title: '新文章標題',
    description: '文章描述',
    date: '2025-05-11',
    author: {
      name: '作者名稱',
    },
    tags: ['標籤1', '標籤2'],
    readTime: 5,
    renderContent: NewPostContent
  }
];
```

## 專案結構

```
.
├── public/              # 靜態資源
│   └── images/         # 圖片資源
├── src/
│   ├── components/     # React 組件
│   │   ├── blog/       # 部落格相關組件
│   │   │   └── posts/  # 文章內容組件
│   │   └── layout/     # 布局組件
│   ├── data/           # 數據管理
│   ├── pages/          # 頁面組件
│   ├── styles/         # CSS 樣式
│   ├── types/          # TypeScript 類型定義
│   ├── App.tsx         # 主應用組件
│   ├── main.tsx        # 應用入口
│   └── index.css       # 全局樣式
├── vite.config.ts      # Vite 配置
├── vitest.config.ts    # Vitest 配置
├── postcss.config.js   # PostCSS 配置
└── package.json        # 專案配置
```

## 部署

本專案可以輕鬆部署到各種平台：

- **Vercel** - 零配置部署
- **Netlify** - 簡單的持續部署
- **GitHub Pages** - 免費靜態站點託管

## License

MIT
