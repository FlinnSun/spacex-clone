import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import './ProductCard.css';

/**
 * SpaceX 产品卡片组件
 * 展示火箭、飞船等产品信息
 */
const ProductCard = ({ 
  product, 
  index = 0, 
  layout = 'default' // 'default', 'reverse', 'large'
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const {
    id,
    name,
    title,
    description,
    features,
    stats,
    image,
    video,
    ctaText = "Learn More",
    ctaLink = "#",
    status = "active" // active, upcoming, development
  } = product;

  // 动画变体
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "easeOut" 
      } 
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 1.2, 
        delay: index * 0.2 + 0.3,
        ease: "easeOut" 
      } 
    }
  };

  // 处理CTA点击
  const handleCtaClick = (e) => {
    e.preventDefault();
    if (ctaLink.startsWith('#')) {
      const element = document.querySelector(ctaLink);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(ctaLink, '_blank');
    }
  };

  // 状态样式
  const getStatusClass = () => {
    switch (status) {
      case 'upcoming': return 'product-card--upcoming';
      case 'development': return 'product-card--development';
      default: return 'product-card--active';
    }
  };

  return (
    <motion.article
      ref={ref}
      className={`product-card ${layout !== 'default' ? `product-card--${layout}` : ''} ${getStatusClass()}`}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* 背景装饰 */}
      <div className="product-card__background"></div>

      {/* 图片/视频区域 */}
      <div className="product-card__media">
        <motion.div
          className="product-card__media-container"
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {video ? (
            <div className="product-card__video-wrapper">
              <video
                className="product-card__video"
                autoPlay
                muted
                loop
                playsInline
                poster={image}
              >
                <source src={video} type="video/mp4" />
              </video>
              <div className="product-card__play-overlay">
                <FiPlay className="product-card__play-icon" />
              </div>
            </div>
          ) : (
            <img
              className="product-card__image"
              src={image}
              alt={name}
              loading="lazy"
            />
          )}
          
          {/* 状态标识 */}
          {status !== 'active' && (
            <div className="product-card__status-badge">
              {status === 'upcoming' ? 'Coming Soon' : 'In Development'}
            </div>
          )}
        </motion.div>
      </div>

      {/* 内容区域 */}
      <div className="product-card__content">
        {/* 产品名称 */}
        <motion.h2
          className="product-card__name"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        >
          {name}
        </motion.h2>

        {/* 产品标题 */}
        <motion.h3
          className="product-card__title"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        >
          {title}
        </motion.h3>

        {/* 产品描述 */}
        <motion.p
          className="product-card__description"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
        >
          {description}
        </motion.p>

        {/* 产品特性 */}
        {features && features.length > 0 && (
          <motion.ul
            className="product-card__features"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
          >
            {features.map((feature, idx) => (
              <li key={idx} className="product-card__feature">
                {feature}
              </li>
            ))}
          </motion.ul>
        )}

        {/* 产品数据 */}
        {stats && stats.length > 0 && (
          <motion.div
            className="product-card__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="product-card__stat">
                <span className="product-card__stat-value">{stat.value}</span>
                <span className="product-card__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* CTA按钮 */}
        <motion.div
          className="product-card__cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
        >
          <motion.a
            href={ctaLink}
            className="product-card__cta-button btn-secondary"
            onClick={handleCtaClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText}
            <FiArrowRight className="product-card__cta-icon" />
          </motion.a>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ProductCard; 