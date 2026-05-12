import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="section visible">
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
    </main>
  );
};

export default Projects;
