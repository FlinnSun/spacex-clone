import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Footer.css';

/**
 * SpaceX 页脚组件
 * 包含版权信息、隐私政策和供应商链接
 */
const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      } 
    }
  };

  return (
    <motion.footer
      ref={ref}
      className="footer"
      variants={footerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container-spacex">
        <div className="footer__content">
          {/* 版权信息 */}
          <div className="footer__copyright">
            <span>SpaceX © {currentYear}</span>
          </div>

          {/* 链接 */}
          <div className="footer__links">
            <a href="#privacy" className="footer__link">
              PRIVACY POLICY
            </a>
            <a href="#suppliers" className="footer__link">
              SUPPLIERS
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 