import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import PostHeader from '../../components/blog/PostHeader';
import SEO from '../../components/SEO';
import { getPostBySlug } from '../../data/posts';

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
      <SEO 
        title={post.title}
        description={post.description}
        image={post.ogImage || post.coverImage}
        article={true}
        author={post.author.name}
        publishedTime={post.date}
        tags={post.tags}
      />
      <article className="blog-post">
        <PostHeader post={post} />
        <div className="post-content-wrapper">
          <PostContent />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
