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

    canvas.width = 160;
    canvas.height = 160;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 55;

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
        this.size = layer === 0 ? 6 : layer === 1 ? 5 : 4;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.03 + Math.random() * 0.02;
      }

      update() {
        this.x = centerX + Math.cos(this.angle) * this.radius;
        this.y = centerY + Math.sin(this.angle) * this.radius;
        this.pulsePhase += this.pulseSpeed;
        this.currentSize = this.size + Math.sin(this.pulsePhase) * 1.5;
      }

      draw() {
        const glowGradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.currentSize * 3
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
          this.currentSize
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
          Math.PI * 2
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
          this.node2.y
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
            particle.size * 2
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

  return <canvas ref={canvasRef} className="drop-shadow-2xl" />;
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
    <p className="text-blue-400/80 text-base md:text-lg tracking-wider mt-3 flex items-center gap-2">
      <span>Here You Can</span>
      <span className="relative inline-block h-8 md:h-9 w-24 md:w-28 overflow-hidden">
        <span
          className={`absolute inset-0 flex items-center justify-center font-bold text-xl md:text-2xl text-cyan-400 transition-all duration-1000 ease-in-out ${
            isAnimating
              ? "translate-y-[-100%] opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          {words[currentIndex]}
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center font-bold text-xl md:text-2xl text-cyan-500 transition-all duration-3000 ease-in-out ${
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
    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight min-h-[200px] md:min-h-[240px]">
      <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
        {displayedText}
      </span>
      {currentIndex < fullText.length && (
        <span
          className={`inline-block w-1 h-12 md:h-16 bg-cyan-400 ml-1 ${
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
      {/* Spinning Neuron Section - Separate at Top */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-blue-500/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,169,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,169,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex justify-center">
            <div
              className="flex items-center gap-8 px-10 py-8 bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-blue-500/10 shadow-2xl"
              style={{
                animation:
                  "rotateIn 2s ease-out, float 6s ease-in-out infinite 2s",
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div
                  className="relative"
                  style={{ animation: "spin 20s linear infinite" }}
                >
                  <NeuralLogo />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  CodeSell
                </h2>
                <p className="text-blue-300/80 text-lg md:text-xl tracking-[0.3em] uppercase font-light mt-1">
                  Academy
                </p>
                <RotatingText />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,169,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,169,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto relative z-10">
          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content - Left Side */}
            <div className="text-center lg:text-left space-y-0 order-2 lg:order-1 mb-20">
              {/* Typing Effect Heading */}
              <TypingEffect />

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
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
                <span className="text-slate-400">
                  Gain skills, build a portfolio, and start your tech career.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="/courses"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-lg text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Link to="/courses">Explore Courses</Link>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                </a>

                <a
                  href="/about"
                  className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-blue-400/30 rounded-full font-semibold text-lg text-blue-200 hover:bg-slate-800/70 hover:border-blue-400/50 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Link to="/coding">Learn More</Link>
                    <svg
                      className="w-5 h-5"
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
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <div className="text-sm text-slate-400 mt-1">Students</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-slate-400 mt-1">Courses</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-purple-400">95%</div>
                  <div className="text-sm text-slate-400 mt-1">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Live Coding Card - Right Side with rotation */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-xl">
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/20 bg-slate-800/50 backdrop-blur-sm p-8"
                  style={{
                    animation: "rotateIn 2s ease-out",
                  }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>

                  <div className="relative space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <svg
                          className="w-8 h-8 text-white"
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
                        <h3 className="text-xl font-bold text-white">
                          Live Coding
                        </h3>
                        <p className="text-slate-400">Interactive Sessions</p>
                      </div>
                    </div>

                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-900/50 border border-blue-500/10">
                        <div className="text-2xl font-bold text-blue-400">
                          24/7
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          Support
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900/50 border border-purple-500/10">
                        <div className="text-2xl font-bold text-purple-400">
                          100%
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          Practical
                        </div>
                      </div>
                    </div>

                    {/* Code snippet decoration */}
                    <div className="bg-slate-900/70 rounded-xl p-4 font-mono text-sm border border-blue-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-2 text-slate-300">
                        <div>
                          <span className="text-purple-400">const</span>{" "}
                          <span className="text-blue-300">learn</span> ={" "}
                          <span className="text-yellow-300">()</span>{" "}
                          <span className="text-cyan-400">=&gt;</span> {"{"}
                        </div>
                        <div className="pl-4">
                          <span className="text-green-400">return</span>{" "}
                          <span className="text-orange-300">'Success'</span>;
                        </div>
                        <div>{"}"}</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-0 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl shadow-cyan-500/50 font-bold animate-bounce">
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
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1);
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
            transform: translateY(-20px);
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
