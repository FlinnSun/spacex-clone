import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductCard from './components/ProductCard/ProductCard';
import Footer from './components/Footer/Footer';
import { products, stats } from './data/spacexData';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 使用专业组件 */}
      <Header />

      <Hero />
      
      {/* 产品展示区 */}
      <section id="vehicles" className="section" style={{ 
        backgroundColor: 'var(--color-secondary)',
        padding: 'var(--spacing-20) 0'
      }}>
        <div className="container-spacex">
          <div className="section-header" style={{ 
            textAlign: 'center', 
            marginBottom: 'var(--spacing-16)' 
          }}>
            <h2 className="section-title" style={{ 
              fontSize: 'var(--font-size-4xl)', 
              fontWeight: '700',
              marginBottom: 'var(--spacing-4)',
              color: 'var(--color-text-primary)'
            }}>
              Our Vehicles
            </h2>
            <p className="section-subtitle" style={{ 
              fontSize: 'var(--font-size-xl)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Revolutionary spacecraft and rockets designed to make life multiplanetary
            </p>
          </div>
          
          <div className="products-grid" style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-8)'
          }}>
            {products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
                layout="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 统计数据区 */}
      <section className="section" style={{ 
        backgroundColor: 'var(--color-primary)',
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--spacing-16) 0'
      }}>
        <div className="container-spacex">
          <div className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-8)',
            textAlign: 'center'
          }}>
            {[
              { value: `${stats.totalLaunches}+`, label: 'Total Launches' },
              { value: `${stats.totalLandings}+`, label: 'Successful Landings' },
              { value: `${stats.totalReflights}+`, label: 'Reflown Rockets' },
              { value: `${stats.totalCrewLaunched}`, label: 'Crew Members Launched' }
            ].map((stat, index) => (
              <div key={index} className="stat-card" style={{
                padding: 'var(--spacing-6)'
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

      <Footer />
    </div>
  );
}

export default App;
