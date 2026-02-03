// src/components/GalaxyBackground.jsx
import React, { useEffect, useRef, useState } from "react";

const GalaxyBackground = () => {
  const canvasRef = useRef(null);
  const [mouse, setMouse] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Stars class
    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.2 + 0.05;
        this.opacity = Math.random() * 0.8 + 0.2;
      }
      update() {
        this.y -= this.speed;
        if (this.y < 0) this.y = height;
      }
      draw() {
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.shadowColor = "white";
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Tech icons class
    class Tech {
      constructor(icon) {
        this.icon = icon;
        this.radius = Math.random() * 50 + 50;
        this.angle = Math.random() * Math.PI * 2;
        this.centerX = Math.random() * width;
        this.centerY = Math.random() * height;
        this.speed = (Math.random() * 0.5 + 0.2) * 0.01;
        this.size = Math.random() * 30 + 20;
        this.x = this.centerX;
        this.y = this.centerY;
      }
      update(mouse) {
        this.angle += this.speed;
        this.x = this.centerX + Math.cos(this.angle) * this.radius;
        this.y = this.centerY + Math.sin(this.angle) * this.radius;

        if (mouse) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const angle = Math.atan2(dy, dx);
            const force = (150 - dist) / 20;
            this.x += Math.cos(angle) * force;
            this.y += Math.sin(angle) * force;
          }
        }
      }
      draw() {
        ctx.fillStyle = "#00fff0";
        ctx.shadowColor = "#00fff0";
        ctx.shadowBlur = 10;
        ctx.font = `${this.size}px Arial`;
        ctx.fillText(this.icon, this.x, this.y);
      }
    }

    const stars = Array.from({ length: 300 }, () => new Star());
    const techIcons = ["💻", "🖥️", "⚡", "🛠️", "🌐", "📡"];
    const techs = techIcons.map((icon) => new Tech(icon));

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse handler
    const handleMouseMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    const handleMouseLeave = () => setMouse(null);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // Draw tech icons
      techs.forEach((t) => {
        t.update(mouse);
        t.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // Removed mouse dependency to prevent re-creating animation

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default GalaxyBackground;
