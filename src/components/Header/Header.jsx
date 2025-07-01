import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../Navigation/Navigation';
import './Header.css';

/**
 * SpaceX 头部导航组件
 * 包含Logo、主导航菜单和移动端汉堡菜单
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 监听滚动事件，改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
    >
      <div className="container-spacex">
        <div className="header__content">
          {/* SpaceX Logo */}
          <div className="header__logo">
            <a href="/" className="logo-link">
              <span className="logo-text">SPACEX</span>
            </a>
          </div>

          {/* 桌面端导航 */}
          <div className="header__nav">
            <Navigation />
          </div>

          {/* 移动端汉堡菜单按钮 */}
          <button
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'hamburger--active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* 移动端导航菜单 */}
        <motion.div
          className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Navigation isMobile={true} />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 