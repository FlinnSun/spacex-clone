import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 使用专业组件 */}
      <Header />

      {/* 简化版Hero - 更接近真实SpaceX官网 */}
      <main className="hero-simple" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* 背景装饰 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
          zIndex: 1
        }}></div>
        
        {/* 遮罩 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
          zIndex: 2
        }}></div>

        {/* 内容 */}
        <div style={{ 
          position: 'relative', 
          zIndex: 3,
          maxWidth: '800px',
          padding: '0 var(--spacing-6)'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
            fontWeight: '100',
            marginBottom: 'var(--spacing-8)',
            color: '#ffffff',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Making Life<br />Multiplanetary
          </h1>
          
          {/* 简洁的按钮 */}
          <button 
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
              padding: 'var(--spacing-4) var(--spacing-8)',
              fontSize: 'var(--font-size-lg)',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              borderRadius: '0',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            Learn More
          </button>
        </div>

        {/* 滚动指示器 */}
        <div style={{
          position: 'absolute',
          bottom: 'var(--spacing-8)',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: 'var(--font-size-sm)',
          zIndex: 3,
          animation: 'pulse 2s infinite'
        }}>
          ↓
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
