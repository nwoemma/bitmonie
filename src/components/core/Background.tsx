// Background.tsx - Enhanced with animated particles and dynamic gradients
import React, { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      vx: number;
      vy: number;
    }> = [];
    
    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2
      });
    }
    
    let time = 0;
    
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.005;
      
      // Draw gradient orbs
      const gradient1 = ctx.createRadialGradient(
        canvas.width * (0.3 + Math.sin(time) * 0.05),
        canvas.height * 0.3,
        0,
        canvas.width * 0.3,
        canvas.height * 0.3,
        canvas.width * 0.4
      );
      gradient1.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
      gradient1.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.7,
        0,
        canvas.width * 0.8,
        canvas.height * 0.7,
        canvas.width * 0.5
      );
      gradient2.addColorStop(0, 'rgba(139, 92, 246, 0.12)');
      gradient2.addColorStop(1, 'rgba(139, 92, 246, 0)');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha + Math.sin(time + p.x) * 0.1})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none -z-10" />
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/8 blur-[100px] rounded-full animate-pulse-slow delay-1000" />
      </div>
    </>
  );
}