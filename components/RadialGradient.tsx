"use client"
import useWindowSize from "@/hook/useWindowSize";
import { useEffect, useState } from 'react';

const RadialGradient = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [width] = useWindowSize();

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if(width > 1000){
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [width]);

  const gradientStyle = {
    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };

  return <div className="radial-gradient" style={gradientStyle}></div>;
};

export default RadialGradient;
