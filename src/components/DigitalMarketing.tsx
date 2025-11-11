import React from "react";
import Header from "./Header";

import FloatingBackground from "./FloatingBackground";

const DigitalMarketing: React.FC = () => {
  return (
    <div className="bg-black min-h-screen relative">
      <FloatingBackground />
      <Header />

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <article className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-4">
              <span className="text-white font-semibold">
                Digital Marketing
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-200 bg-clip-text text-transparent">
              Want to Ship Your Products to Users? <br /> Master Digital
              Marketing!
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
              <span>📅 November 2025</span>
              <span>•</span>
              <span>⏱️ 12 min read</span>
              <span>•</span>
              <span>By CodeSell Academy</span>
            </div>
            <img
              src="/images/digital-marketing-blog.PNG"
              alt="Digital Marketing"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/50 border border-primary/20 rounded-2xl p-8 mb-12">
              <p className="text-xl text-gray-300 leading-relaxed">
                You've built an amazing product. It solves real problems. It's
                innovative. But here's the harsh truth:{" "}
                <strong className="text-primary">
                  if people don't know about it, it doesn't exist
                </strong>
                . Digital marketing is the bridge between your brilliant product
                and the customers who need it. Let's explore how to cross that
                bridge successfully.
              </p>
            </div>

            {/* Section 1 - What */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                📌 What is Digital Marketing?
              </h2>

              <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-primary/30 rounded-2xl p-8 mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Digital marketing is{" "}
                  <strong className="text-primary">
                    the art and science of promoting products, services, or
                    brands through digital channels
                  </strong>
                  . It's how businesses reach, engage, and convert their target
                  audience online.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Unlike traditional marketing (billboards, TV ads, print),
                  digital marketing is{" "}
                  <strong className="text-cyan-400">
                    measurable, targeted, interactive, and scalable
                  </strong>
                  . You can reach millions of people globally or target just 100
                  people in your city – all while tracking every click, view,
                  and conversion.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                The Core Components:
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/50 border border-blue-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-blue-400 mb-3">
                    🔍 SEO (Search Engine Optimization)
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Optimize your website to rank higher on Google. When someone
                    searches "best laptop 2025," your product appears first!
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-purple-400 mb-3">
                    📱 Social Media Marketing
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Build communities on Instagram, Facebook, LinkedIn, Twitter.
                    Engage with audiences where they spend their time.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-green-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-green-400 mb-3">
                    📧 Email Marketing
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Send personalized messages directly to inboxes. Nurture
                    leads, announce launches, build relationships.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-orange-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-orange-400 mb-3">
                    💰 Paid Advertising
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Google Ads, Facebook Ads, Instagram Ads – pay to put your
                    product in front of the right eyes at the right time.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-pink-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-pink-400 mb-3">
                    ✍️ Content Marketing
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Create valuable blogs, videos, infographics. Educate,
                    entertain, and attract your ideal customers organically.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">
                    📊 Analytics & Data
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Track everything. Know what works, what doesn't. Optimize
                    campaigns based on real data, not guesses.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 - Why */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                🤔 Why Digital Marketing Matters
              </h2>

              <div className="bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/30 rounded-2xl p-8 mb-8">
                <p className="text-xl text-gray-300 leading-relaxed mb-4">
                  Imagine spending years building a revolutionary app, only to
                  have 10 downloads. Or creating a life-changing course that no
                  one enrolls in.{" "}
                  <strong className="text-primary">
                    This is the reality for businesses without marketing.
                  </strong>
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Digital marketing isn't optional – it's{" "}
                  <strong className="text-cyan-400">
                    essential for survival
                  </strong>{" "}
                  in today's world.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                Here's Why You Need It:
              </h3>

              <div className="space-y-6">
                <div className="bg-gray-900/50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-green-400 mb-3">
                    🌍 Global Reach, Local Precision
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Reach customers in New York, Tokyo, or your neighborhood –
                    all from your laptop. Target by location, age, interests,
                    behavior. No more spray-and-pray advertising.
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-blue-400 mb-3">
                    💸 Cost-Effective & ROI-Driven
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    A $50 Facebook ad campaign can reach 10,000 people. A
                    billboard costs $5,000 and reaches random passersby. Plus,
                    you can track every dollar spent and its return!
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-purple-400 mb-3">
                    📈 Measurable Results
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Know exactly: How many people saw your ad? Clicked? Bought?
                    From which city? At what time? Traditional marketing can't
                    give you this.
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-orange-400 mb-3">
                    🎯 Hyper-Targeting
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Sell fitness products? Target 25-35 year olds who follow gym
                    influencers, live in urban areas, and recently searched
                    "home workout." That's digital marketing power!
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-pink-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-pink-400 mb-3">
                    ⚡ Real-Time Optimization
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Ad not working? Change it in 5 minutes. Found a winning
                    strategy? Scale it instantly. No waiting for print deadlines
                    or commercial slots.
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">
                    🤝 Build Relationships
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Engage with customers through comments, DMs, emails. Create
                    communities. Turn customers into brand advocates.
                    Traditional marketing is one-way; digital is a conversation.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-yellow-400 mb-3">
                  📊 Real-World Example:
                </h4>
                <p className="text-gray-300 leading-relaxed mb-3">
                  A small online clothing brand spent $500 on Instagram ads
                  targeting fashion enthusiasts aged 20-30. Result:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>50,000 people saw the ad</li>
                  <li>2,000 clicked to the website</li>
                  <li>150 made purchases</li>
                  <li>Revenue: $7,500</li>
                  <li>
                    <strong className="text-green-400">
                      ROI: 1,400% profit!
                    </strong>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 - Job Possibilities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-6">
                💼 Career Opportunities in Digital Marketing
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Digital marketing isn't just a skill – it's a{" "}
                <strong className="text-primary">
                  gateway to diverse, high-paying careers
                </strong>
                . Every business needs marketing. From startups to Fortune 500
                companies, demand is skyrocketing.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    📱 Social Media Manager
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Manage brand presence on Instagram, Facebook, LinkedIn,
                    Twitter. Create content, engage communities, grow followers.
                  </p>
                  <p className="text-cyan-400 font-semibold mb-2">
                    💰 $45k - $85k/year
                  </p>
                  <p className="text-gray-400 text-xs">
                    Skills: Content creation, analytics, community management
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">
                    🔍 SEO Specialist
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Optimize websites to rank #1 on Google. Keyword research,
                    on-page optimization, link building, technical SEO.
                  </p>
                  <p className="text-cyan-400 font-semibold mb-2">
                    💰 $50k - $95k/year
                  </p>
                  <p className="text-gray-400 text-xs">
                    Skills: SEO tools, analytics, content strategy
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    ✍️ Content Marketing Manager
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Create blogs, videos, infographics, ebooks. Tell brand
                    stories that attract and convert audiences organically.
                  </p>
                  <p className="text-cyan-400 font-semibold mb-2">
                    💰 $55k - $100k/year
                  </p>
                  <p className="text-gray-400 text-xs">
                    Skills: Writing, storytelling, SEO, design
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">
                    💰 PPC/Ads Specialist
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Manage Google Ads, Facebook Ads, Instagram campaigns.
                    Optimize ad spend, maximize ROI, A/B test creatives.
                  </p>
                  <p className="text-cyan-400 font-semibold mb-2">
                    💰 $50k - $110k/year
                  </p>
                  <p className="text-gray-400 text-xs">
                    Skills: Google Ads, Facebook Ads Manager, analytics
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">
                    📧 Email Marketing Specialist
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Design email campaigns, build automation flows, segment
                    audiences, optimize open and click rates.
                  </p>
                  <p className="text-cyan-400 font-semibold mb-2">
                    💰 $45k - $85k/year
                  </p>
                  <p className="text-gray-400 text-xs">
                    Skills: Mailchimp, automation, copywriting
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-pink-400 mb-3">
                    📊 Marketing Analyst
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Dive deep into data. Track KPIs, create reports, identify
                    trends, recommend strategies based on insights.
                  </p>
                  <p className="text-cyan-400 font-semibold mb-2">
                    💰 $55k - $100k/year
                  </p>
                  <p className="text-gray-400 text-xs">
                    Skills: Google Analytics, Excel, data visualization
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">
                    🎥 Video Marketing Specialist
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Create and market YouTube content, TikToks, reels. Video is
                    the future – be ahead of the curve!
                  </p>
                  <p className="text-cyan-400 font-semibold mb-2">
                    💰 $50k - $95k/year
                  </p>
                  <p className="text-gray-400 text-xs">
                    Skills: Video editing, storytelling, platform strategies
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">
                    🚀 Growth Hacker
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Use creative, low-cost strategies to rapidly grow
                    businesses. Experiment, iterate, scale what works.
                  </p>
                  <p className="text-cyan-400 font-semibold mb-2">
                    💰 $60k - $120k/year
                  </p>
                  <p className="text-gray-400 text-xs">
                    Skills: Experimentation, analytics, creativity
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-primary/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-400 mb-6">
                  💼 Or... Start Your Own Business!
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  With digital marketing skills, you can:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <span>
                      <strong className="text-cyan-400">Freelance</strong> –
                      Work with multiple clients remotely, $50-$200/hour
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏢</span>
                    <span>
                      <strong className="text-cyan-400">Start an agency</strong>{" "}
                      – Build a team, serve businesses, scale unlimited
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🛍️</span>
                    <span>
                      <strong className="text-cyan-400">
                        Launch your own products
                      </strong>{" "}
                      – Use marketing to sell anything online
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <span>
                      <strong className="text-cyan-400">
                        Become a consultant
                      </strong>{" "}
                      – Charge $5k-$20k per client for strategy
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Why Learn Now Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-primary/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">
                  🔥 Why Learn Digital Marketing NOW?
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Every business needs it</strong> – From local
                      shops to tech giants
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Work from anywhere</strong> – All you need is a
                      laptop and internet
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Constantly evolving</strong> – Always new
                      strategies, platforms, opportunities
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Low barrier to entry</strong> – No degree
                      required, just skills and creativity
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Direct impact</strong> – See results of your work
                      immediately
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Ship Your Products to the World?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Master digital marketing with CodeSell Academy and turn your
                ideas into profitable businesses!
              </p>
              <a
                href="/courses"
                className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform"
              >
                Start Your Marketing Journey →
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default DigitalMarketing;
