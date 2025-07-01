import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronDown } from 'react-icons/fi';
import './Hero.css';

/**
 * SpaceX 主视觉区域组件
 * 包含背景视频/图片、主标题、副标题和CTA按钮
 */
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // 英雄区域内容数据
  const heroSlides = [
    {
      id: 1,
      title: "MAKING HUMANITY MULTIPLANETARY",
      subtitle: "SpaceX designs, manufactures and launches advanced rockets and spacecraft.",
      ctaText: "Learn More",
      ctaLink: "#mission",
      backgroundImage: "/images/hero-starship.jpg",
      backgroundVideo: "/videos/hero-starship.mp4"
    },
    {
      id: 2,
      title: "FALCON 9",
      subtitle: "First orbital class rocket capable of reflight",
      ctaText: "Watch Launch",
      ctaLink: "#falcon9",
      backgroundImage: "/images/hero-falcon9.jpg",
      backgroundVideo: "/videos/hero-falcon9.mp4"
    },
    {
      id: 3,
      title: "CREW DRAGON",
      subtitle: "Returning human spaceflight to the United States",
      ctaText: "Explore Mission",
      ctaLink: "#dragon",
      backgroundImage: "/images/hero-dragon.jpg",
      backgroundVideo: "/videos/hero-dragon.mp4"
    }
  ];

  const currentHero = heroSlides[currentSlide];

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // 8秒切换一次

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // 滚动到下一个区域
  const scrollToNext = () => {
    const nextSection = document.querySelector('#products');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 文字动画变体
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  // 按钮动画变体
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.6, 
        delay: 0.4,
        ease: "easeOut" 
      } 
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="hero" ref={ref}>
      {/* 背景视频/图片 */}
      <div className="hero__background">
        {currentHero.backgroundVideo ? (
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster={currentHero.backgroundImage}
          >
            <source src={currentHero.backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            className="hero__image"
            src={currentHero.backgroundImage}
            alt={currentHero.title}
          />
        )}
        
        {/* 遮罩层 */}
        <div className="hero__overlay"></div>
      </div>

      {/* 内容区域 */}
      <div className="hero__content">
        <div className="container-spacex">
          <div className="hero__text-content">
            {/* 主标题 */}
            <motion.h1
              key={`title-${currentSlide}`}
              className="hero__title"
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {currentHero.title}
            </motion.h1>

            {/* 副标题 */}
            <motion.p
              key={`subtitle-${currentSlide}`}
              className="hero__subtitle"
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              {currentHero.subtitle}
            </motion.p>

            {/* CTA按钮 */}
            <motion.div
              className="hero__cta"
              variants={buttonVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
            >
              <a
                href={currentHero.ctaLink}
                className="btn-primary hero__cta-button"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(currentHero.ctaLink);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {currentHero.ctaText}
              </a>
            </motion.div>
          </div>
        </div>

        {/* 轮播指示器 */}
        <div className="hero__indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero__indicator ${index === currentSlide ? 'hero__indicator--active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* 滚动指示器 */}
        <motion.button
          className="hero__scroll-indicator"
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ y: 5 }}
          aria-label="Scroll to next section"
        >
          <FiChevronDown className="hero__scroll-icon" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero; 