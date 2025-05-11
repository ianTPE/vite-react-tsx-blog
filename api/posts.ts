export const posts = [
  {
    slug: 'first-post',
    title: '使用 Vite + React 建立部落格',
    description: '學習如何使用 Vite、React 和 TypeScript 建立現代化部落格',
    ogImage: '/images/first-post.jpg',
  },
  {
    slug: 'second-post',
    title: 'TypeScript 與 React 的最佳實踐',
    description: '探索在 React 專案中使用 TypeScript 的有效方法',
    ogImage: '/images/second-post.jpg',
  },
]

export default function handler(req: Request) {
  return new Response(JSON.stringify(posts), {
    headers: {
      'content-type': 'application/json',
    },
  })
}
