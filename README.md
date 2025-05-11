# Vite + React + TypeScript 部落格專案

這是一個使用 Vite、React 和 TypeScript 建立的現代化部落格專案。

## 特性

- ⚡️ **Vite** - 極快的開發伺服器和建構工具
- ⚛️ **React 19** - 最新版本的 React
- 🔷 **TypeScript** - 類型安全的 JavaScript
- 🎨 **Tailwind CSS v4** - 實用優先的 CSS 框架
- 🧪 **Vitest** - 由 Vite 驅動的極速單元測試框架
- 🔍 **Vite Plugin Inspect** - 可視化分析構建產物
- 🔥 **HMR** - 熱模塊替換，即時預覽更改

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

## 開發工具

### Vite Plugin Inspect

在開發模式下，訪問 `http://localhost:5173/__inspect/` 可以查看：
- 模組依賴關係
- 轉換過程
- 插件執行順序
- 構建分析

### ESLint

```bash
npm run lint
```

## 技術堆疊

- **Vite 6.3.5** - 建構工具
- **React 19.1.0** - UI 框架
- **TypeScript 5.8.3** - 類型系統
- **Tailwind CSS 4.1.6** - CSS 框架
- **Vitest 3.1.3** - 測試框架
- **@testing-library/react** - React 測試工具
- **vite-plugin-inspect** - 開發分析工具

## 專案結構

```
.
├── src/
│   ├── assets/         # 靜態資源
│   ├── test/           # 測試設置
│   ├── App.tsx         # 主應用組件
│   ├── App.test.tsx    # 應用測試
│   ├── main.tsx        # 應用入口
│   └── index.css       # 全局樣式
├── dist/               # 建構輸出
├── vite.config.ts      # Vite 配置
├── vitest.config.ts    # Vitest 配置
├── postcss.config.js   # PostCSS 配置
├── tsconfig.json       # TypeScript 配置
└── package.json        # 專案配置
```

## License

MIT
