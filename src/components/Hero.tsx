import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const NeuralLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const maybeCtx = canvas.getContext("2d");
    if (!maybeCtx) return;
    const ctx = maybeCtx;

    // Make canvas responsive but with minimum size
    const size = Math.max(100, Math.min(140, window.innerWidth * 0.2));
    canvas.width = size;
    canvas.height = size;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = size * 0.34;

    class Node {
      angle: number;
      layer: number;
      radius: number;
      size: number;
      pulsePhase: number;
      pulseSpeed: number;
      x: number = 0;
      y: number = 0;
      currentSize: number = 0;

      constructor(angle: number, layer: number) {
        this.angle = angle;
        this.layer = layer;
        this.radius = layer === 0 ? 0 : radius * layer;
        this.size =
          layer === 0
            ? size * 0.0375
            : layer === 1
              ? size * 0.03125
              : size * 0.025;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.03 + Math.random() * 0.02;
      }

      update() {
        this.x = centerX + Math.cos(this.angle) * this.radius;
        this.y = centerY + Math.sin(this.angle) * this.radius;
        this.pulsePhase += this.pulseSpeed;
        this.currentSize =
          this.size + Math.sin(this.pulsePhase) * (size * 0.009375);
      }

      draw() {
        const glowGradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.currentSize * 3,
        );
        glowGradient.addColorStop(0, "rgba(139, 169, 255, 0.6)");
        glowGradient.addColorStop(0.4, "rgba(99, 135, 255, 0.3)");
        glowGradient.addColorStop(1, "rgba(99, 135, 255, 0)");

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        const coreGradient = ctx.createRadialGradient(
          this.x - this.currentSize * 0.3,
          this.y - this.currentSize * 0.3,
          0,
          this.x,
          this.y,
          this.currentSize,
        );
        coreGradient.addColorStop(0, "#d4e0ff");
        coreGradient.addColorStop(0.5, "#8BA9FF");
        coreGradient.addColorStop(1, "#6387ff");

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2);
        ctx.fillStyle = coreGradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(
          this.x - this.currentSize * 0.2,
          this.y - this.currentSize * 0.2,
          this.currentSize * 0.4,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      }
    }

    class Connection {
      node1: Node;
      node2: Node;
      particles: { progress: number; speed: number; size: number }[] = [];
      maxParticles: number;

      constructor(node1: Node, node2: Node) {
        this.node1 = node1;
        this.node2 = node2;
        this.maxParticles = 2;
      }

      update() {
        if (this.particles.length < this.maxParticles && Math.random() < 0.02) {
          this.particles.push({
            progress: 0,
            speed: 0.008 + Math.random() * 0.012,
            size: 2 + Math.random() * 2,
          });
        }

        this.particles = this.particles.filter((p) => p.progress < 1);
        this.particles.forEach((p) => (p.progress += p.speed));
      }

      draw() {
        const lineGradient = ctx.createLinearGradient(
          this.node1.x,
          this.node1.y,
          this.node2.x,
          this.node2.y,
        );
        lineGradient.addColorStop(0, "rgba(139, 169, 255, 0.15)");
        lineGradient.addColorStop(0.5, "rgba(139, 169, 255, 0.3)");
        lineGradient.addColorStop(1, "rgba(139, 169, 255, 0.15)");

        ctx.beginPath();
        ctx.moveTo(this.node1.x, this.node1.y);
        ctx.lineTo(this.node2.x, this.node2.y);
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        this.particles.forEach((particle) => {
          const x =
            this.node1.x + (this.node2.x - this.node1.x) * particle.progress;
          const y =
            this.node1.y + (this.node2.y - this.node1.y) * particle.progress;

          const particleGradient = ctx.createRadialGradient(
            x,
            y,
            0,
            x,
            y,
            particle.size * 2,
          );
          particleGradient.addColorStop(0, "#ffffff");
          particleGradient.addColorStop(0.3, "#c8d6ff");
          particleGradient.addColorStop(0.6, "#8BA9FF");
          particleGradient.addColorStop(1, "rgba(139, 169, 255, 0)");

          ctx.beginPath();
          ctx.arc(x, y, particle.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = particleGradient;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(x, y, particle.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        });
      }
    }

    const nodes: Node[] = [];
    const connections: Connection[] = [];

    nodes.push(new Node(0, 0));

    for (let i = 0; i < 6; i++) {
      nodes.push(new Node(((Math.PI * 2) / 6) * i, 0.5));
    }

    for (let i = 0; i < 12; i++) {
      nodes.push(new Node(((Math.PI * 2) / 12) * i + Math.PI / 12, 1));
    }

    for (let i = 1; i <= 6; i++) {
      connections.push(new Connection(nodes[0], nodes[i]));
    }

    for (let i = 1; i <= 6; i++) {
      const outerIndex1 = 7 + (i - 1) * 2;
      const outerIndex2 = 7 + ((i - 1) * 2 + 1);
      connections.push(new Connection(nodes[i], nodes[outerIndex1]));
      connections.push(new Connection(nodes[i], nodes[outerIndex2]));
    }

    for (let i = 1; i <= 6; i++) {
      const nextIndex = i === 6 ? 1 : i + 1;
      connections.push(new Connection(nodes[i], nodes[nextIndex]));
    }

    for (let i = 7; i < 19; i++) {
      const nextIndex = i === 18 ? 7 : i + 1;
      connections.push(new Connection(nodes[i], nodes[nextIndex]));
    }

    for (let i = 7; i < 19; i += 3) {
      const crossIndex = i + 6 <= 18 ? i + 6 : i + 6 - 12;
      connections.push(new Connection(nodes[i], nodes[crossIndex]));
    }

    let animationId: number | undefined;

    function animate() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      nodes.forEach((node) => node.update());
      connections.forEach((conn) => {
        conn.update();
        conn.draw();
      });
      nodes.forEach((node) => node.draw());

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="drop-shadow-2xl w-full h-auto" />;
};

const RotatingText = () => {
  const words = ["Code", "Learn", "Excel"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-blue-400/80 text-xs sm:text-sm md:text-base tracking-wider mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2 justify-center">
      <span>Here You Can</span>
      <span className="relative inline-block h-5 sm:h-6 md:h-7 w-14 sm:w-16 md:w-20 overflow-hidden">
        <span
          className={`absolute inset-0 flex items-center justify-center font-bold text-sm sm:text-base md:text-lg text-cyan-400 transition-all duration-1000 ease-in-out ${
            isAnimating
              ? "translate-y-[-100%] opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          {words[currentIndex]}
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center font-bold text-sm sm:text-base md:text-lg text-cyan-500 transition-all duration-3000 ease-in-out ${
            isAnimating
              ? "translate-y-0 opacity-100"
              : "translate-y-[100%] opacity-0"
          }`}
        >
          {words[(currentIndex + 1) % words.length]}
        </span>
      </span>
    </p>
  );
};

const TypingEffect = () => {
  const fullText =
    '"Invest in yourself today, and your future career will thank you tomorrow"';
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight min-h-[80px] sm:min-h-[100px] md:min-h-[120px] text-center lg:text-left">
      <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
        {displayedText}
      </span>
      {currentIndex < fullText.length && (
        <span
          className={`inline-block w-1 h-5 sm:h-6 md:h-8 lg:h-10 xl:h-12 bg-cyan-400 ml-1 ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </h1>
  );
};

const Hero = () => {
  return (
    <>
      {/* Spinning Neuron Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-blue-500/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,169,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,169,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px]"></div>

        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="flex justify-center">
            <div
              className="flex items-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-slate-800/40 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl border border-blue-500/10 shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
              style={{
                animation:
                  "rotateIn 3s cubic-bezier(0.4, 0, 0.2, 1), float 4s ease-in-out infinite 3s",
              }}
            >
              {/* Neuron on the LEFT side */}
              <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg animate-pulse"></div>
                <div
                  className="relative w-full h-full"
                  style={{ animation: "spin 20s linear infinite" }}
                >
                  <NeuralLogo />
                </div>
              </div>

              {/* Texts on the RIGHT side */}
              <div className="flex flex-col flex-1 min-w-0 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
                  CodeSell
                </h2>
                <p className="text-blue-300/80 text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase font-light mt-0 sm:mt-1">
                  Academy
                </p>
                <div className="mt-1 sm:mt-2 flex justify-center sm:justify-start">
                  <RotatingText />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 h-32 sm:w-60 sm:h-60 bg-blue-500/10 rounded-full blur-xl sm:blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-xl sm:blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-28 h-28 sm:w-56 sm:h-56 bg-cyan-500/5 rounded-full blur-xl sm:blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,169,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,169,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto relative z-10 max-w-6xl">
          {/* Advertising Cards Section */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            {/* Left Side Card - Courses Promotion */}
            <div
              className="lg:w-1/2 transform transition-all duration-500 hover:scale-[1.02]"
              style={{
                animation: "slideInLeft 1s ease-out 0.5s both",
                transform: "perspective(1000px) rotateY(-5deg)",
              }}
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/20 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm p-4 sm:p-6 md:p-8">
                {/* Background effects */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg"></div>

                {/* Header */}
                <div className="relative mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                    🚀 নতুন ব্যাচ শুরু হচ্ছে!
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base">
                    ডিজিটাল মার্কেটিং এবং ওয়েব ডেভেলপমেন্টে আপনার ক্যারিয়ার
                    শুরু করুন
                  </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {/* Web Development Course */}
                  <div className="relative p-3 sm:p-4 rounded-lg bg-slate-900/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base">
                          ওয়েব ডেভেলপমেন্ট
                        </h4>
                        <p className="text-slate-400 text-xs sm:text-sm mt-1">
                          HTML, CSS, JavaScript, React, Node.js
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">
                            ৬ মাস
                          </span>
                          <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded">
                            প্র্যাকটিকাল
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Digital Marketing Course */}
                  <div className="relative p-3 sm:p-4 rounded-lg bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base">
                          ডিজিটাল মার্কেটিং
                        </h4>
                        <p className="text-slate-400 text-xs sm:text-sm mt-1">
                          SEO, Social Media, Google Ads, Analytics
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded">
                            ৬ মাস
                          </span>
                          <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded">
                            প্রজেক্ট ভিত্তিক
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="relative">
                  <button className="w-full group px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-sm sm:text-base text-white shadow-lg shadow-blue-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      এখনই এনরোল করুন
                    </span>
                  </button>
                </div>
                <p className="text-center text-xs text-slate-400 mt-2">
                  সীমিত আসন - এখনই আসন নিশ্চিত করুন ।
                </p>
              </div>
            </div>

            {/* Right Side Card - Discount Offer */}
            <div
              className="lg:w-1/2 transform transition-all duration-500 hover:scale-[1.02]"
              style={{
                animation: "slideInRight 1s ease-out 0.5s both",
                transform: "perspective(1000px) rotateY(5deg)",
              }}
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-purple-500/20 bg-gradient-to-br from-slate-900/70 to-purple-900/20 backdrop-blur-sm p-4 sm:p-6 md:p-8">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/10 rounded-full blur-lg"></div>

                {/* Header with countdown */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      💰 মেগা ডিসকাউন্ট অফার!
                    </h3>
                    <div className="px-2 sm:px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-xs font-bold">
                      <span className="animate-pulse">আর মাত্র ৩ দিন বাকি</span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base">
                    আপনার স্বপ্ন পূরণে আমরা দিচ্ছি বিশাল ছাড়!
                  </p>
                </div>

                {/* Discount Offers */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {/* Special Discount */}
                  <div className="relative p-3 sm:p-4 rounded-lg bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl sm:text-2xl font-bold text-yellow-400">
                            🔥 ৪০%
                          </span>
                          <span className="text-white font-bold text-sm sm:text-base">
                            স্পেশাল ডিসকাউন্ট
                          </span>
                        </div>
                        <p className="text-slate-300 text-xs sm:text-sm mt-1">
                          প্রতি ব্যাচের প্রথম ১০ জনের জন্য!
                        </p>
                      </div>
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-md"></div>

                        {/* Main circle */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-600/20 to-amber-600/20 backdrop-blur-sm rounded-full border-2 border-yellow-500/30 flex flex-col items-center justify-center p-2">
                          {/* "প্রথম" text */}
                          <div className="text-xs sm:text-sm font-bold text-yellow-300 mb-1">
                            প্রথম
                          </div>

                          {/* "১০" text with glow effect */}
                          <div className="text-2xl sm:text-3xl font-bold text-yellow-400 drop-shadow-lg">
                            ১০
                          </div>

                          {/* Inner glow dot */}
                          <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400/40 rounded-full blur-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flat Discount */}
                  <div className="relative p-3 sm:p-4 rounded-lg bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-cyan-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl sm:text-2xl font-bold text-cyan-400">
                            🔥 ৩০%
                          </span>
                          <span className="text-white font-bold text-sm sm:text-base">
                            ফ্ল্যাট ডিসকাউন্ট
                          </span>
                        </div>
                        <p className="text-slate-300 text-xs sm:text-sm mt-1">
                          ২৫শে জানুয়ারির মধ্যে এনরোল করলেই
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-400 mb-1">
                          শেষ তারিখ
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-white bg-slate-800/50 px-3 py-1 rounded-lg">
                          ২৫ জানুয়ারি
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center p-2 sm:p-3 rounded-lg bg-slate-900/50 border border-green-500/20">
                    <div className="text-lg sm:text-xl font-bold text-green-400">
                      🎯
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      লাইভ ক্লাস
                    </div>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-lg bg-slate-900/50 border border-blue-500/20">
                    <div className="text-lg sm:text-xl font-bold text-blue-400">
                      📚
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      ম্যাটেরিয়াল
                    </div>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-lg bg-slate-900/50 border border-purple-500/20">
                    <div className="text-lg sm:text-xl font-bold text-purple-400">
                      💼
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      প্লেসমেন্ট
                    </div>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-lg bg-slate-900/50 border border-cyan-500/20">
                    <div className="text-lg sm:text-xl font-bold text-cyan-400">
                      🤝
                    </div>
                    <div className="text-xs text-slate-300 mt-1">সাপোর্ট</div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600  hover:from-purple-700 rounded-lg font-semibold text-sm sm:text-base text-white shadow-lg shadow-purple-500/50 transition-all duration-300 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    ডিসকাউন্ট নিয়ে এনরোল করুন
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Text Content - Left Side */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-5 order-1">
              {/* Typing Effect Heading */}
              <TypingEffect />

              {/* Reduced gap between heading and paragraph */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-2 sm:mt-3">
                Beginner-friendly courses in{" "}
                <span className="text-blue-300 font-semibold">
                  Web Development
                </span>
                ,{" "}
                <span className="text-purple-300 font-semibold">
                  Data Science & AI
                </span>
                ,{" "}
                <span className="text-cyan-300 font-semibold">
                  Digital Marketing
                </span>
                , and{" "}
                <span className="text-indigo-300 font-semibold">
                  UX/UI Design
                </span>
                .
                <br />
                <span className="text-slate-400 text-xs sm:text-sm">
                  Gain skills, build a portfolio, and start your tech career.
                </span>
              </p>

              {/* Buttons with reduced width and side by side */}
              <div className="flex flex-row gap-2 sm:gap-3 justify-center lg:justify-start pt-2 sm:pt-3">
                <Link
                  to="/courses"
                  className="group relative px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-xs sm:text-sm text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden whitespace-nowrap flex-1 max-w-[140px] sm:max-w-[160px]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-1 sm:gap-2">
                    Explore Courses
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>

                <Link
                  to="/about"
                  className="group px-4 sm:px-5 py-2 sm:py-3 bg-slate-800/50 backdrop-blur-sm border-2 border-blue-400/30 rounded-full font-semibold text-xs sm:text-sm text-blue-200 hover:bg-slate-800/70 hover:border-blue-400/50 transition-all duration-300 whitespace-nowrap flex-1 max-w-[120px] sm:max-w-[140px]"
                >
                  <span className="flex items-center justify-center gap-1 sm:gap-2">
                    Learn More
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-5 max-w-xl mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">
                    Students
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-400">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">
                    Courses
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Live Coding Card - Right Side - Smaller width and smoother original animation */}
            <div className="flex justify-center lg:justify-end order-2 -mt-4 sm:-mt-6 lg:-mt-8">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div
                  className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/20 bg-slate-800/50 backdrop-blur-sm p-3 sm:p-4 md:p-6"
                  style={{
                    animation:
                      "rotateIn 3s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both",
                  }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-lg sm:blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-purple-500/10 rounded-full blur-md sm:blur-lg"></div>

                  <div className="relative space-y-3 sm:space-y-4 md:space-y-6">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shrink-0">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                          Live Coding
                        </h3>
                        <p className="text-slate-400 text-xs sm:text-sm">
                          Interactive Sessions
                        </p>
                      </div>
                    </div>

                    <div className="h-1.5 sm:h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                      <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-slate-900/50 border border-blue-500/10">
                        <div className="text-lg sm:text-xl font-bold text-blue-400">
                          24/7
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          Support
                        </div>
                      </div>
                      <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-slate-900/50 border border-purple-500/10">
                        <div className="text-lg sm:text-xl font-bold text-purple-400">
                          100%
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          Practical
                        </div>
                      </div>
                    </div>

                    {/* Code snippet decoration */}
                    <div className="bg-slate-900/70 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 font-mono text-xs sm:text-sm border border-blue-500/20">
                      <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-1 sm:space-y-2 text-slate-300">
                        <div>
                          <span className="text-purple-400">const</span>{" "}
                          <span className="text-blue-300">learn</span> ={" "}
                          <span className="text-yellow-300">()</span>{" "}
                          <span className="text-cyan-400">=&gt;</span> {"{"}
                        </div>
                        <div className="pl-3 sm:pl-4">
                          <span className="text-green-400">return</span>{" "}
                          <span className="text-orange-300">'Success'</span>;
                        </div>
                        <div>{"}"}</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-br from-cyan-500 to-blue-600 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold rounded-lg sm:rounded-xl shadow-lg shadow-cyan-500/50 animate-bounce">
                    🎓 Free Trial
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes rotateIn {
          0% {
            opacity: 0;
            transform: translateX(-100%) rotate(-180deg) scale(0.5);
          }
          60% {
            opacity: 0.8;
            transform: translateX(10%) rotate(-10deg) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px) perspective(1000px) rotateY(-10deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) perspective(1000px) rotateY(-5deg);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px) perspective(1000px) rotateY(10deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) perspective(1000px) rotateY(5deg);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
