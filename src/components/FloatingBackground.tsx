import React from "react";

const FloatingBackground: React.FC = () => {
  const icons = [
    {
      symbol: "</>",
      size: "text-4xl",
      animation: "animate-float-slow",
      position: "top-20 left-[10%]",
      color: "text-cyan-500/20",
    },
    {
      symbol: "{}",
      size: "text-5xl",
      animation: "animate-float-medium",
      position: "top-40 right-[15%]",
      color: "text-purple-500/20",
    },
    {
      symbol: "<html>",
      size: "text-3xl",
      animation: "animate-float-fast",
      position: "top-[30%] left-[20%]",
      color: "text-blue-500/20",
    },
    {
      symbol: "📊",
      size: "text-6xl",
      animation: "animate-float-slow",
      position: "top-[50%] right-[10%]",
      color: "opacity-20",
    },
    {
      symbol: "💻",
      size: "text-5xl",
      animation: "animate-float-medium",
      position: "bottom-[30%] left-[15%]",
      color: "opacity-20",
    },
    {
      symbol: "AI",
      size: "text-4xl",
      animation: "animate-float-fast",
      position: "bottom-40 right-[25%]",
      color: "text-pink-500/20",
    },
    {
      symbol: "📱",
      size: "text-5xl",
      animation: "animate-float-slow",
      position: "top-[60%] left-[5%]",
      color: "opacity-20",
    },
    {
      symbol: "var x",
      size: "text-3xl",
      animation: "animate-float-medium",
      position: "top-[80%] right-[20%]",
      color: "text-green-500/20",
    },
    {
      symbol: "⚙️",
      size: "text-4xl",
      animation: "animate-float-fast",
      position: "top-[15%] right-[35%]",
      color: "opacity-20",
    },
    {
      symbol: "function()",
      size: "text-2xl",
      animation: "animate-float-slow",
      position: "bottom-[60%] right-[5%]",
      color: "text-yellow-500/20",
    },
    {
      symbol: "🚀",
      size: "text-6xl",
      animation: "animate-float-medium",
      position: "top-[45%] left-[40%]",
      color: "opacity-20",
    },
    {
      symbol: "const",
      size: "text-3xl",
      animation: "animate-float-fast",
      position: "bottom-20 left-[30%]",
      color: "text-indigo-500/20",
    },
    {
      symbol: "[ ]",
      size: "text-5xl",
      animation: "animate-float-slow",
      position: "top-[70%] right-[40%]",
      color: "text-teal-500/20",
    },
    {
      symbol: "🎨",
      size: "text-4xl",
      animation: "animate-float-medium",
      position: "bottom-[45%] left-[25%]",
      color: "opacity-20",
    },
    {
      symbol: "async",
      size: "text-3xl",
      animation: "animate-float-fast",
      position: "top-[25%] left-[45%]",
      color: "text-rose-500/20",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
          50% { transform: translateY(-40px) translateX(-10px) rotate(-5deg); }
          75% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-30px) translateX(-15px) rotate(-8deg); }
          50% { transform: translateY(-60px) translateX(15px) rotate(8deg); }
          75% { transform: translateY(-30px) translateX(-15px) rotate(-8deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-40px) translateX(20px) rotate(10deg); }
          50% { transform: translateY(-80px) translateX(-20px) rotate(-10deg); }
          75% { transform: translateY(-40px) translateX(20px) rotate(10deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 12s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`absolute ${icon.position} ${icon.size} ${icon.color} ${icon.animation} font-mono font-bold`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {icon.symbol}
          </div>
        ))}
      </div>
    </>
  );
};

export default FloatingBackground;
