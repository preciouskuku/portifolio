import React, { useRef, useEffect } from 'react';
import reactLogo from '../assets/React Native.jpeg';
import jsLogo from '../assets/js.jpeg';
import htmlLogo from '../assets/html.jpeg';
import cssLogo from '../assets/CSS Logo.jpeg';
import githubLogo from '../assets/github.jpeg';
import './TechFloaters.css';

export default function TechFloaters() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function setCanvasSize() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    setCanvasSize();

    const logos = [reactLogo, jsLogo, htmlLogo, cssLogo, githubLogo];

    // Each logo will have:
    // angle (in radians), radius from center, speed (angle increment), size, image
    const orbiters = logos.map((imgSrc, i) => ({
      img: new Image(),
      angle: (i * (2 * Math.PI)) / logos.length, // evenly spaced start angles
      radius: 80 + i * 40, // increasing orbit radius
      speed: 0.01 + i * 0.003, // slightly different speeds
      size: 40 + (i % 2) * 10,
    }));

    // Set image srcs and track loaded images
    let loadedCount = 0;
    orbiters.forEach((orbiter, i) => {
      orbiter.img.src = logos[i];
      orbiter.img.onload = () => {
        loadedCount++;
        if (loadedCount === orbiters.length) {
          animate();
        }
      };
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      orbiters.forEach((orbiter) => {
        // Update angle for orbit rotation
        orbiter.angle += orbiter.speed;

        // Calculate x, y based on angle and radius
        const x = centerX + orbiter.radius * Math.cos(orbiter.angle) - orbiter.size / 2;
        const y = centerY + orbiter.radius * Math.sin(orbiter.angle) - orbiter.size / 2;

        ctx.drawImage(orbiter.img, x, y, orbiter.size, orbiter.size);
      });

      requestAnimationFrame(animate);
    }

    // Resize handler to keep canvas sized correctly
    function handleResize() {
      setCanvasSize();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="tech-canvas"></canvas>;
}
