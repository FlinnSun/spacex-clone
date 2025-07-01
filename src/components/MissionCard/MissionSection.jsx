import React, { useEffect, useRef } from 'react';
import './MissionSection.css';

const MissionSection = ({ mission }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
          } else {
            entry.target.style.opacity = '0.7';
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const currentRef = sectionRef.current;

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // 预加载图片
  useEffect(() => {
    const img = new Image();
    img.src = mission.image;
    if (imageRef.current) {
      imageRef.current.style.backgroundImage = `url(${mission.image})`;
    }
  }, [mission.image]);

  return (
    <section
      ref={sectionRef}
      className="mission-section"
    >
      <div 
        ref={imageRef}
        className="mission-background"
      />
      <div className="mission-overlay" />
      <div className="mission-content">
        <h2>{mission.description}</h2>
        <h1>{mission.title}</h1>
        <button className="mission-button">
          {mission.buttonText}
        </button>
      </div>
      <div className="scroll-indicator" />
    </section>
  );
};

export default MissionSection; 