export const config = {
  matcher: [
    /*
     * 匹配所有路徑除了：
     * 1. /api 路徑
     * 2. /_next (Next.js 系統路徑)
     * 3. /static (靜態資源)
     * 4. /favicon.ico, /robots.txt 等公共文件
     */
    '/((?!api|_next|static|favicon.ico|robots.txt).*)',
  ],
}

export default async function middleware(request: Request) {
  // 只處理 HTML 請求
  const acceptHeader = request.headers.get('accept') || ''
  if (!acceptHeader.includes('text/html')) {
    return
  }

  const url = new URL(request.url)
  const pathname = url.pathname

  // 獲取原始 HTML 響應
  const response = await fetch(request)
  const html = await response.text()

  // 文章數據
  const posts = [
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

  let metaTags = {
    title: "Ian's Blog",
    description: '使用 Vite + React + TypeScript 構建的現代化部落格',
    image: `${url.origin}/images/default-og-image.png`,
    url: request.url,
    type: 'website',
  }

  // 根據路徑生成對應的 meta 標籤
  if (pathname.startsWith('/blog/') && pathname !== '/blog/') {
    const slug = pathname.replace('/blog/', '').replace(/\/$/, '')
    const post = posts.find(p => p.slug === slug)

    if (post) {
      metaTags = {
        title: `${post.title} | Ian's Blog`,
        description: post.description,
        image: `${url.origin}${post.ogImage}`,
        url: request.url,
        type: 'article',
      }
    }
  } else {
    switch (pathname) {
      case '/':
        metaTags.title = "首頁 | Ian's Blog"
        metaTags.image = `${url.origin}/images/hero-background.jpg`
        break
      case '/blog':
      case '/blog/':
        metaTags.title = "部落格文章 | Ian's Blog"
        metaTags.description = '閱讀關於 Vite、React 和 TypeScript 的技術文章'
        break
      case '/about':
      case '/about/':
        metaTags.title = "關於我們 | Ian's Blog"
        metaTags.description = '這是一個使用 Vite + React + TypeScript 構建的現代化部落格平台'
        break
    }
  }

  // 構建 meta 標籤
  const metaTagsHtml = `
    <title>${metaTags.title}</title>
    <meta name="description" content="${metaTags.description}">
    <meta property="og:title" content="${metaTags.title}">
    <meta property="og:description" content="${metaTags.description}">
    <meta property="og:image" content="${metaTags.image}">
    <meta property="og:url" content="${metaTags.url}">
    <meta property="og:type" content="${metaTags.type}">
    <meta property="og:site_name" content="Ian's Blog">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${metaTags.title}">
    <meta name="twitter:description" content="${metaTags.description}">
    <meta name="twitter:image" content="${metaTags.image}">
  `

  // 將 meta 標籤注入到 HTML 中
  let modifiedHtml = html

  // 如果已經有 title 標籤，替換它
  if (modifiedHtml.includes('<title>')) {
    modifiedHtml = modifiedHtml.replace(/<title>.*?<\/title>/, '')
  }

  // 在 </head> 前插入 meta 標籤
  if (modifiedHtml.includes('</head>')) {
    modifiedHtml = modifiedHtml.replace('</head>', `${metaTagsHtml}</head>`)
  }

  return new Response(modifiedHtml, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
      'cache-control': 's-maxage=1, stale-while-revalidate',
    },
  })
}
