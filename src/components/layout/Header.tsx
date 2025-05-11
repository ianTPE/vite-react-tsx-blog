import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="site-logo">
          Ian's Blog
        </Link>
        <nav className="site-nav">
          <ul>
            <li>
              <Link to="/">首頁</Link>
            </li>
            <li>
              <Link to="/blog">部落格</Link>
            </li>
            <li>
              <Link to="/about">關於</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
