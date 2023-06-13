import React, { useState, useEffect } from 'react';
import imageSrc from './vel.jpg'

const AnimationComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const animate = () => {
    setPosition((prevPosition) => ({
      x: (prevPosition.x + 1) % window.innerWidth,
      y: (prevPosition.y + 1) % window.innerHeight,
    }));
    requestAnimationFrame(animate);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        transition: 'top 0.5s, left 0.5s',
      }}
    >
      <img
        src={imageSrc} // Replace with the path to your image
        alt="Animated Image"
        style={{ width: '200px', height: '200px' }}
      />
    </div>
  );
};

export default AnimationComponent;

