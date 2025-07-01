import React from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

/**
 * SpaceX 导航菜单组件
 * 支持桌面端和移动端显示
 */
const Navigation = ({ isMobile = false }) => {
  // 主要产品导航数据
  const mainProducts = [
    { name: 'Falcon 9', href: '#falcon9' },
    { name: 'Falcon Heavy', href: '#falcon-heavy' },
    { name: 'Dragon', href: '#dragon' },
    { name: 'Starship', href: '#starship' },
  ];

  // 服务项目导航数据
  const services = [
    { name: 'Human Spaceflight', href: '#human-spaceflight' },
    { name: 'Rideshare', href: '#rideshare' },
    { name: 'Starshield', href: '#starshield' },
    { name: 'Starlink', href: '#starlink' },
  ];

  // 公司信息导航数据
  const company = [
    { name: 'Mission', href: '#mission' },
    { name: 'Launches', href: '#launches' },
    { name: 'Careers', href: '#careers' },
    { name: 'Updates', href: '#updates' },
    { name: 'Shop', href: '#shop' },
  ];

  // 处理导航点击事件
  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  // 渲染导航链接
  const renderNavItem = (item, index, delay = 0) => (
    <motion.li
      key={item.name}
      initial={isMobile ? { x: -50, opacity: 0 } : { y: -20, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: delay + index * 0.1,
        ease: "easeOut"
      }}
      className="nav__item"
    >
      <a
        href={item.href}
        className="nav-link"
        onClick={(e) => handleNavClick(e, item.href)}
      >
        {item.name}
      </a>
    </motion.li>
  );

  if (isMobile) {
    // 移动端导航 - 垂直布局
    return (
      <nav className="nav nav--mobile">
        <div className="nav__section">
          <h3 className="nav__section-title">Products</h3>
          <ul className="nav__list nav__list--mobile">
            {mainProducts.map((item, index) => renderNavItem(item, index, 0.1))}
          </ul>
        </div>

        <div className="nav__section">
          <h3 className="nav__section-title">Services</h3>
          <ul className="nav__list nav__list--mobile">
            {services.map((item, index) => renderNavItem(item, index, 0.2))}
          </ul>
        </div>

        <div className="nav__section">
          <h3 className="nav__section-title">Company</h3>
          <ul className="nav__list nav__list--mobile">
            {company.map((item, index) => renderNavItem(item, index, 0.3))}
          </ul>
        </div>
      </nav>
    );
  }

  // 桌面端导航 - 水平布局
  return (
    <nav className="nav nav--desktop">
      <ul className="nav__list nav__list--desktop">
        {/* 主要产品 */}
        {mainProducts.map((item, index) => renderNavItem(item, index, 0))}
        
        {/* 分隔符 */}
        <li className="nav__separator">|</li>
        
        {/* 服务项目 */}
        {services.map((item, index) => renderNavItem(item, index, 0.2))}
        
        {/* 分隔符 */}
        <li className="nav__separator">|</li>
        
        {/* 公司信息 */}
        {company.map((item, index) => renderNavItem(item, index, 0.4))}
      </ul>
    </nav>
  );
};

export default Navigation; 