import { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="section visible">
        <div className="container">
          <h2 className="section-title">學經歷</h2>
          
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ marginBottom: '30px', borderLeft: '4px solid var(--accent-color)', paddingLeft: '15px' }}>學歷</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2025 - 現在</div>
                <div className="timeline-content">
                  <h3>國立臺灣大學</h3>
                  <p>精準健康碩士學位學程</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2021 - 2025</div>
                <div className="timeline-content">
                  <h3>長庚大學</h3>
                  <p>人工智慧學士學位學程</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: '30px', borderLeft: '4px solid var(--accent-color)', paddingLeft: '15px' }}>工作經歷</h3>
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
        </div>
      </section>
    </main>
  );
};

export default Experience;
