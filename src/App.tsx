import { useEffect, useRef } from 'react'
import './index.css'

function App() {
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app">
      <header>
        <nav className="container">
          <div className="logo">Patten Chiu</div>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>關於我</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>經歷</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>專案</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>聯絡</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero visible">
          <div className="container">
            <h1 className="fade-in">你好，我是 <span className="highlight">Patten Chiu</span></h1>
            <p className="subtitle fade-in">一名熱愛技術與創新的開發者</p>
            <div className="cta-buttons fade-in">
              <a href="#projects" className="btn primary" onClick={(e) => scrollToSection(e, 'projects')}>查看作品</a>
              <a href="#contact" className="btn secondary" onClick={(e) => scrollToSection(e, 'contact')}>與我聯絡</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">關於我</h2>
            <div className="about-content">
              <p>我是一位專注於構建高品質軟體解決方案的開發者。我熱衷於學習新技術，並將其應用於解決實際問題。這裡展示了我的專業技能和近期所參與的專案。</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section bg-alt">
          <div className="container">
            <h2 className="section-title">經歷</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2023 - 現在</div>
                <div className="timeline-content">
                  <h3>軟體工程師</h3>
                  <p>在某科技公司負責前端開發與系統優化。</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2021 - 2023</div>
                <div className="timeline-content">
                  <h3>專案經理 / 開發人員</h3>
                  <p>領導跨團隊專案，並負責核心模組的架構設計。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">專案作品</h2>
            <div className="project-grid">
              <div className="project-card">
                <div className="project-info">
                  <h3>專案 A</h3>
                  <p>一個基於人工智慧的數據分析平台，幫助企業優化決策流程。</p>
                  <div className="tags">
                    <span>Python</span>
                    <span>React</span>
                    <span>TensorFlow</span>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-info">
                  <h3>專案 B</h3>
                  <p>高效能的電子商務系統，支援高併發處理與自動化庫存管理。</p>
                  <div className="tags">
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>AWS</span>
                  </div>
                </div>
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

      <footer>
        <div className="container">
          <p>&copy; 2026 Patten Chiu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
