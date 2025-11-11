import React from "react";
import Header from "./Header";

import FloatingBackground from "./FloatingBackground";

const Coding: React.FC = () => {
  return (
    <div className="bg-black min-h-screen relative">
      <FloatingBackground />
      <Header />

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <article className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-4">
              <span className="text-primary font-semibold text-white">
                Programming & Development
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              The Deeper Meaning of Code: How Your Programs Talk to Computers
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
              <span>📅 November 2025</span>
              <span>•</span>
              <span>⏱️ 10 min read</span>
              <span>•</span>
              <span>By CodeSell Academy</span>
            </div>
            <img
              src="/images/code.png"
              alt="Understanding Code"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/50 border border-primary/20 rounded-2xl p-8 mb-12">
              <p className="text-xl text-gray-300 leading-relaxed">
                Have you ever wondered what really happens when you write a line
                of code? Beyond the syntax and keywords, there's a fascinating
                journey that transforms your thoughts into actions a computer
                can understand. Let's dive deep into the magical world where
                human logic meets machine execution.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                What is Code, Really?
              </h2>
              <div className="bg-gray-900/30 border-l-4 border-primary p-6 rounded-r-xl mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Code is essentially a{" "}
                  <strong className="text-primary">set of instructions</strong>{" "}
                  written in a language that both humans can read and computers
                  can execute. Think of it as a recipe – you're telling the
                  computer exactly what to do, step by step.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  But here's the fascinating part: computers don't actually
                  understand your Python, JavaScript, or Java code directly.
                  They only understand{" "}
                  <strong className="text-primary">binary</strong> – sequences
                  of 0s and 1s. Your code goes through an incredible
                  transformation before the computer can act on it.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  💡 Quick Example
                </h3>
                <code className="block bg-black/50 p-4 rounded-lg text-green-400 mb-3 font-mono text-sm">
                  print("Hello, World!")
                </code>
                <p className="text-gray-400 text-sm">
                  This simple Python line goes through
                  compilation/interpretation, becomes machine code, instructs
                  the CPU, which then sends signals to display pixels on your
                  screen!
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Journey: From Code to CPU
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-900/50 border border-primary/20 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                    Step 1: Writing the Code
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You write code in a <strong>high-level language</strong>{" "}
                    (Python, JavaScript, C++, etc.). These languages are
                    designed to be human-readable with syntax that makes sense
                    to programmers. You express your logic, algorithms, and
                    instructions in a way that's intuitive to you.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-primary/20 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                    Step 2: Compilation or Interpretation
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    This is where the magic begins. Depending on the language:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>
                      <strong className="text-primary">
                        Compiled languages
                      </strong>{" "}
                      (C, C++, Rust): A compiler translates your entire code
                      into machine code before execution
                    </li>
                    <li>
                      <strong className="text-primary">
                        Interpreted languages
                      </strong>{" "}
                      (Python, JavaScript): An interpreter reads and executes
                      your code line by line
                    </li>
                    <li>
                      <strong className="text-primary">Hybrid approach</strong>{" "}
                      (Java, C#): Code is compiled to bytecode, then interpreted
                      by a virtual machine
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border border-primary/20 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                    Step 3: Assembly & Machine Code
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your code is now converted into{" "}
                    <strong className="text-primary">assembly language</strong>{" "}
                    (low-level, human-readable instructions) and then to{" "}
                    <strong className="text-primary">machine code</strong>{" "}
                    (binary sequences like 01001000 01100101). This is the
                    language the CPU actually understands.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-primary/20 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                    Step 4: CPU Execution
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The{" "}
                    <strong className="text-primary">
                      Central Processing Unit (CPU)
                    </strong>{" "}
                    – the brain of the computer – receives these binary
                    instructions. Here's what happens:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>
                      The <strong>Control Unit</strong> fetches instructions
                      from memory
                    </li>
                    <li>
                      The <strong>Arithmetic Logic Unit (ALU)</strong> performs
                      calculations and logical operations
                    </li>
                    <li>
                      The <strong>Registers</strong> store temporary data during
                      processing
                    </li>
                    <li>
                      The <strong>Cache</strong> provides ultra-fast access to
                      frequently used data
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                How Code Interacts with the Browser
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                When you write web code (HTML, CSS, JavaScript), the interaction
                is even more fascinating:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-900/20 to-blue-950/20 border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">
                    🌐 The Browser Engine
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The browser has a rendering engine (like Blink for Chrome,
                    Gecko for Firefox) that parses your HTML and CSS, creates a
                    DOM (Document Object Model) tree, and paints pixels on
                    screen.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/20 to-purple-950/20 border border-purple-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">
                    ⚡ JavaScript Engine
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The JS engine (V8, SpiderMonkey) compiles JavaScript to
                    machine code just-in-time (JIT), allowing dynamic,
                    interactive web experiences. It manages the event loop,
                    callbacks, and asynchronous operations.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  The Complete Web Flow:
                </h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-300">
                  <li>You write HTML/CSS/JavaScript code</li>
                  <li>Browser downloads and parses the code</li>
                  <li>HTML is parsed into DOM, CSS into CSSOM</li>
                  <li>JavaScript is compiled and executed</li>
                  <li>Render tree is created combining DOM and CSSOM</li>
                  <li>Layout is calculated (positions, sizes)</li>
                  <li>Painting happens – pixels appear on screen!</li>
                </ol>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Deeper Philosophy of Code
              </h2>

              <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-primary/30 rounded-2xl p-8">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Code is more than instructions – it's a{" "}
                  <strong className="text-primary">
                    bridge between human intention and machine action
                  </strong>
                  . When you code, you're:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🧠</span>
                    <span>
                      <strong className="text-cyan-400">
                        Thinking algorithmically
                      </strong>{" "}
                      – Breaking down complex problems into logical steps
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎨</span>
                    <span>
                      <strong className="text-cyan-400">
                        Creating abstractions
                      </strong>{" "}
                      – Building layers of complexity from simple building
                      blocks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🔧</span>
                    <span>
                      <strong className="text-cyan-400">Problem-solving</strong>{" "}
                      – Finding elegant solutions to real-world challenges
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🌍</span>
                    <span>
                      <strong className="text-cyan-400">
                        Impacting the world
                      </strong>{" "}
                      – Every app, website, and system changes lives
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Final Section - Careers */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-6">
                What Careers Await After Learning Coding?
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Learning to code opens doors to some of the most exciting and
                well-paid careers in the world. Here's what you can become:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    💻 Software Developer
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Build desktop applications, mobile apps, or enterprise
                    software. Work with companies like Microsoft, Apple, or
                    startups.
                  </p>
                  <p className="text-cyan-400 font-semibold">
                    💰 $70k - $150k+/year
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">
                    🌐 Web Developer
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Create stunning websites and web applications. Frontend,
                    backend, or full-stack – you choose!
                  </p>
                  <p className="text-cyan-400 font-semibold">
                    💰 $60k - $130k+/year
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    📱 Mobile App Developer
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Build iOS and Android apps. React Native, Flutter, Swift, or
                    Kotlin – the world is mobile-first!
                  </p>
                  <p className="text-cyan-400 font-semibold">
                    💰 $75k - $140k+/year
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">
                    🤖 AI/ML Engineer
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Work with artificial intelligence, machine learning models,
                    and data science. The future is here!
                  </p>
                  <p className="text-cyan-400 font-semibold">
                    💰 $90k - $180k+/year
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">
                    ☁️ Cloud/DevOps Engineer
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Manage cloud infrastructure, automate deployments, ensure
                    systems run smoothly 24/7.
                  </p>
                  <p className="text-cyan-400 font-semibold">
                    💰 $85k - $160k+/year
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-pink-400 mb-3">
                    🎮 Game Developer
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Create immersive gaming experiences. Unity, Unreal Engine –
                    turn your passion into a career!
                  </p>
                  <p className="text-cyan-400 font-semibold">
                    💰 $65k - $135k+/year
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">
                    🔐 Cybersecurity Specialist
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Protect systems from hackers, ensure data security, ethical
                    hacking, and penetration testing.
                  </p>
                  <p className="text-cyan-400 font-semibold">
                    💰 $80k - $170k+/year
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">
                    💼 Tech Entrepreneur
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Build your own startup, create SaaS products, or become a
                    freelance developer. Sky's the limit!
                  </p>
                  <p className="text-cyan-400 font-semibold">
                    💰 Unlimited potential
                  </p>
                </div>
              </div>

              <div className="mt-10 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-primary/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🚀 Why Start Learning Today?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>High demand</strong> – Tech jobs are growing 25%
                      faster than other sectors
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Remote work</strong> – Code from anywhere in the
                      world
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Creative freedom</strong> – Build anything you can
                      imagine
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Future-proof</strong> – Technology will only
                      become more important
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Coding Journey?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Join CodeSell Academy and transform your career in just a few
                months!
              </p>
              <a
                href="/courses"
                className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform"
              >
                Explore Our Courses →
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Coding;
