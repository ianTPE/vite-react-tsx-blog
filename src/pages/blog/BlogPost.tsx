import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import PostHeader from '../../components/blog/PostHeader';
import { getPostBySlug } from '../../data/posts';

// 載入中組件
const PostLoading = () => (
  <div className="flex justify-center items-center min-h-[400px]">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>
  </div>
);

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');

  if (!post) {
    return (
      <Layout>
        <div className="not-found">
          <h1>文章未找到</h1>
          <p>抱歉，您訪問的文章不存在。</p>
        </div>
      </Layout>
    );
  }

  const PostContent = post.renderContent;

  return (
    <Layout>
      <article className="blog-post">
        <PostHeader post={post} />
        <div className="post-content-wrapper">
          <Suspense fallback={<PostLoading />}>
            <PostContent />
          </Suspense>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
