import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // safety guard
        if (!ctx) {
            return;
        }

        // Configuration
        const gridSize = 40; // Size of the invisible grid
        const runnerCount = 15; // REDUCED from 40 to 15 for better performance
        const trailLength = 10; // REDUCED from 20 to 10

        setCanvasSize();

        // Circuit Runner Class
        class Runner {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
                this.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
                this.history = []; // Stores path for the trail

                // Random direction: 0: up, 1: right, 2: down, 3: left
                this.direction = Math.floor(Math.random() * 4);
                this.speed = gridSize / 4; // Reverted for smoother movement
                this.life = Math.random() * 100 + 100; // How long it survives

                // Tech colors
                const colors = ["#06b6d4", "#3b82f6", "#a855f7", "#00f0ff"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.width = Math.random() * 2 + 1;
            }

            update() {
                // Add current position to history
                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > trailLength) {
                    this.history.shift();
                }

                // Move based on direction
                switch (this.direction) {
                    case 0: this.y -= this.speed; break; // Up
                    case 1: this.x += this.speed; break; // Right
                    case 2: this.y += this.speed; break; // Down
                    case 3: this.x -= this.speed; break; // Left
                }

                // Chance to turn at grid intersections
                if (this.x % gridSize === 0 && this.y % gridSize === 0) {
                    if (Math.random() < 0.2) {
                        // Turn 90 degrees left or right
                        this.direction = (this.direction + (Math.random() < 0.5 ? 1 : 3)) % 4;
                    }
                }

                this.life--;

                // Respawn if dead or out of bounds
                if (this.life <= 0 || this.x < -50 || this.x > canvas.width + 50 || this.y < -50 || this.y > canvas.height + 50) {
                    this.reset();
                }
            }

            draw() {
                if (this.history.length < 2) return;

                ctx.beginPath();
                ctx.moveTo(this.history[0].x, this.history[0].y);
                for (let i = 1; i < this.history.length; i++) {
                    ctx.lineTo(this.history[i].x, this.history[i].y);
                }

                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.width;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";

                // PERFORMANCE FIX: Removed shadowBlur (glow) as it causes significant lag on some devices
                // ctx.shadowBlur = 10; 
                // ctx.shadowColor = this.color;

                ctx.stroke();

                // Draw head
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize Runners
        const runners = [];
        for (let i = 0; i < runnerCount; i++) {
            runners.push(new Runner());
        }

        // Draw static grid background
        const drawGrid = () => {
            ctx.strokeStyle = "rgba(6, 182, 212, 0.05)"; // Very faint cyan
            ctx.lineWidth = 1;
            ctx.beginPath();

            for (let x = 0; x <= canvas.width; x += gridSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
            }

            for (let y = 0; y <= canvas.height; y += gridSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
            }
            ctx.stroke();
        };

        // Animation Loop
        function animate() {
            // Dark Tech Background
            const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            bgGradient.addColorStop(0, "#0a0a0a");   // Almost Black
            bgGradient.addColorStop(1, "#111827");   // Gray 900

            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drawGrid();

            // Update and draw runners
            runners.forEach(runner => {
                runner.update();
                runner.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        // Handle resize
        const handleResize = () => {
            setCanvasSize();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 -z-10 w-full h-full"
            style={{
                background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
            }}
        />
    );
};

export default AnimatedBackground;
