import React from 'react';
import Layout from '../../components/layout/Layout';
import PostCard from '../../components/blog/PostCard';
import { getAllPosts } from '../../data/posts';

const BlogIndex: React.FC = () => {
  const posts = getAllPosts();

  return (
    <Layout>
      <div className="blog-index">
        <h1 className="page-title">部落格文章</h1>
        <div className="posts-grid">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;
