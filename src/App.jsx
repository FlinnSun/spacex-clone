import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 导航栏 - 使用新样式系统 */}
      <header style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: 'var(--spacing-4) 0', 
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container-spacex flex items-center justify-between">
          <h1 style={{ 
            fontSize: 'var(--font-size-2xl)', 
            fontWeight: '700',
            margin: 0
          }}>
            🚀 SpaceX
          </h1>
          <nav className="flex gap-8">
            <a href="#vehicles" className="nav-link">Falcon 9</a>
            <a href="#vehicles" className="nav-link">Falcon Heavy</a>
            <a href="#vehicles" className="nav-link">Dragon</a>
            <a href="#vehicles" className="nav-link">Starship</a>
          </nav>
        </div>
      </header>

      {/* 主视觉区 - 全新设计 */}
      <main className="hero-section" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-hero)',
        position: 'relative',
        textAlign: 'center',
        padding: 'var(--spacing-20) var(--spacing-6)'
      }}>
        <div className="hero-content animate-fade-in-up" style={{ maxWidth: '800px' }}>
          <h1 className="hero-title" style={{ 
            fontSize: 'var(--font-size-6xl)', 
            fontWeight: '700',
            marginBottom: 'var(--spacing-6)',
            background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Making Humanity Multiplanetary
          </h1>
          <p className="hero-subtitle" style={{ 
            fontSize: 'var(--font-size-xl)', 
            marginBottom: 'var(--spacing-8)',
            color: 'var(--color-text-secondary)',
            lineHeight: '1.6'
          }}>
            SpaceX designs, manufactures and launches advanced rockets and spacecraft. 
            Our ultimate goal is to make life multiplanetary.
          </p>
          <button className="btn btn-primary">
            Explore Missions
          </button>
        </div>
        
        {/* 滚动指示器 */}
        <div className="scroll-indicator animate-pulse" style={{
          position: 'absolute',
          bottom: 'var(--spacing-8)',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--color-text-secondary)',
          fontSize: 'var(--font-size-sm)'
        }}>
          ↓ Scroll to explore
        </div>
      </main>

      {/* 产品展示区 - 卡片网格 */}
      <section id="vehicles" className="section" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div className="container-spacex">
          <div className="section-header">
            <h2 className="section-title">Our Vehicles</h2>
            <p className="section-subtitle">
              Revolutionary spacecraft and rockets designed to make life multiplanetary
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' 
          }}>
            {[
              {
                name: 'Falcon 9',
                description: 'First orbital class rocket capable of reflight',
                stats: ['22,800 kg to LEO', '200+ Missions', 'Proven Reliability']
              },
              {
                name: 'Falcon Heavy',
                description: 'The most powerful operational rocket in the world',
                stats: ['63,800 kg to LEO', '27 Boosters', 'Heavy Payloads']
              },
              {
                name: 'Dragon',
                description: 'Returning human spaceflight to the United States',
                stats: ['7 Crew Members', 'ISS Missions', 'Safe Return']
              },
              {
                name: 'Starship',
                description: 'Making life multiplanetary',
                stats: ['100+ t to LEO', 'Mars Missions', 'Full Reusability']
              }
            ].map((vehicle, index) => (
              <div key={index} className="card gpu-accelerated" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <h3 className="card-title">{vehicle.name}</h3>
                <p className="card-description mb-4">{vehicle.description}</p>
                <div className="vehicle-stats">
                  {vehicle.stats.map((stat, i) => (
                    <div key={i} className="stat-item" style={{
                      padding: 'var(--spacing-2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: 'var(--radius-base)',
                      fontSize: 'var(--font-size-sm)',
                      marginBottom: 'var(--spacing-2)'
                    }}>
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 统计数据区 */}
      <section className="section" style={{ 
        backgroundColor: 'var(--color-primary)',
        borderTop: '1px solid var(--color-border)'
      }}>
        <div className="container-spacex">
          <div className="grid grid-cols-4 gap-8 text-center" style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
          }}>
            {[
              { value: '200+', label: 'Total Launches' },
              { value: '165+', label: 'Successful Landings' },
              { value: '150+', label: 'Reflown Rockets' },
              { value: '46', label: 'Crew Members Launched' }
            ].map((stat, index) => (
              <div key={index} className="stat-card" style={{
                padding: 'var(--spacing-6)',
                animationDelay: `${index * 0.2}s`
              }}>
                <div style={{
                  fontSize: 'var(--font-size-5xl)',
                  fontWeight: '700',
                  color: 'var(--color-accent)',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--color-text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer style={{ 
        padding: 'var(--spacing-12) 0', 
        textAlign: 'center', 
        backgroundColor: 'var(--color-secondary)',
        borderTop: '1px solid var(--color-border)'
      }}>
        <div className="container-spacex">
          <p style={{ 
            color: 'var(--color-text-muted)', 
            fontSize: 'var(--font-size-sm)' 
          }}>
            © 2024 SpaceX Clone - 学习项目 | 样式已优化
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
