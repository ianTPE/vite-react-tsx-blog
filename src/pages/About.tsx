import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="關於我們"
        description="這是一個使用 Vite + React + TypeScript 構建的現代化部落格平台"
      />
      <div className="about-page">
        <h1>關於我們</h1>
        <p>
          這是一個使用 Vite + React + TypeScript 構建的現代化部落格平台。
          我們致力於分享開發經驗和技術見解。
        </p>
        <p>
          本部落格採用組件化的設計，每篇文章都是獨立的 React 組件，
          這使得我們能夠在文章中嵌入互動元素和自定義的視覺效果。
        </p>
      </div>
    </Layout>
  );
};

export default About;
