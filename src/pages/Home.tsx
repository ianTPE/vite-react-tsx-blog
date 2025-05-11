import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PostCard from '../components/blog/PostCard';
import { getAllPosts } from '../data/posts';

const Home: React.FC = () => {
  const recentPosts = getAllPosts().slice(0, 3); // 只顯示最近的3篇文章

  return (
    <Layout>
      <div className="home-page">
        <section className="hero" style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}>
          <div className="hero-overlay">
            <h1>歡迎來到 Ian's Blog</h1>
            <p>使用 Vite + React + TypeScript 構建的現代化部落格</p>
          </div>
        </section>
        
        <section className="recent-posts">
          <h2>最新文章</h2>
          <div className="posts-grid">
            {recentPosts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/blog" className="view-all-button">
              查看所有文章
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
