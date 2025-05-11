import React from 'react';
import { type BlogPost } from '../../types/blog';

interface PostHeaderProps {
  post: BlogPost;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  return (
    <div className="post-header">
      <div className="post-meta">
        <span className="post-date">{post.date}</span>
        {post.readTime && <span className="post-read-time">{post.readTime} min read</span>}
      </div>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-description">{post.description}</p>
      <div className="post-tags">
        {post.tags.map(tag => (
          <span key={tag} className="post-tag">{tag}</span>
        ))}
      </div>
      <div className="post-author">
        {post.author.image && (
          <img src={post.author.image} alt={post.author.name} className="author-image" />
        )}
        <div className="author-info">
          <h3 className="author-name">{post.author.name}</h3>
          {post.author.bio && <p className="author-bio">{post.author.bio}</p>}
        </div>
      </div>
      {post.coverImage && (
        <div className="post-cover-image">
          <img 
            src={post.coverImage} 
            alt={post.title} 
          />
        </div>
      )}
    </div>
  );
};

export default PostHeader;
