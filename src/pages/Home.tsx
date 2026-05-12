import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observerRef.current?.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <main>
      <section id="hero" className="hero visible">
        <div className="container">
          <h1 className="fade-in">你好，我是 <span className="highlight">Patten Chiu</span></h1>
          <p className="subtitle fade-in">一名熱愛技術與創新的開發者</p>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">關於我</h2>
          <div className="about-content">
            <p style={{ marginBottom: '30px' }}>我是一位專注於構建高品質軟體解決方案的開發者。我熱衷於學習新技術，並將其應用於解決實際問題。這裡展示了我的專業技能和近期所參與的專案。</p>
            <div className="cta-buttons" style={{ marginTop: '40px' }}>
              <Link to="/projects" className="btn primary">查看作品</Link>
              <Link to="/experience" className="btn secondary">查看經歷</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-alt">
        <div className="container">
          <h2 className="section-title">聯絡方式</h2>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-item">Email</a>
            <a href="https://github.com/PattenChiu" className="contact-item" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" className="contact-item">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
