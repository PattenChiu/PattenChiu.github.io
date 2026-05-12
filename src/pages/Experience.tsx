import { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="section visible">
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
    </main>
  );
};

export default Experience;
