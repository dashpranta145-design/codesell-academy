import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

import FloatingBackground from "./FloatingBackground";

const Spoken: React.FC = () => {
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
                Communication Skills
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Spoken English: Your Key to Unlocking Global Opportunities
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
              <span>📅 November 2025</span>
              <span>•</span>
              <span>⏱️ 10 min read</span>
              <span>•</span>
              <span>By CodeSell Academy</span>
            </div>
            <img
              src="/images/spoken-blog.jpg"
              alt="Spoken English"
              className="w-full h-70 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/50 border border-primary/20 rounded-2xl p-8 mb-12">
              <p className="text-xl text-gray-300 leading-relaxed">
                Imagine having brilliant ideas but struggling to express them.
                Picture acing a technical interview but losing the job because
                of communication gaps.{" "}
                <strong className="text-primary">
                  Your success isn't just about what you know – it's about how
                  well you can communicate what you know.
                </strong>{" "}
                Spoken English is the bridge between your potential and your
                success.
              </p>
            </div>

            {/* Section 1 - What */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                🗣️ What is Spoken English?
              </h2>

              <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-primary/30 rounded-2xl p-8 mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Spoken English is{" "}
                  <strong className="text-primary">
                    the ability to communicate effectively in English through
                    verbal conversation
                  </strong>
                  . It goes beyond grammar rules and vocabulary – it's about
                  fluency, pronunciation, confidence, and the natural flow of
                  conversation.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  While written English focuses on formal structure, spoken
                  English is about{" "}
                  <strong className="text-cyan-400">
                    real-time expression, active listening, and dynamic
                    interaction
                  </strong>
                  . It's the language you use in meetings, presentations,
                  interviews, and daily conversations.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                Key Elements of Spoken English:
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/50 border border-blue-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-blue-400 mb-3">
                    🎯 Fluency
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Speaking smoothly without frequent pauses, hesitations, or
                    searching for words. Natural flow of thoughts to speech.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-purple-400 mb-3">
                    🔊 Pronunciation
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Clear articulation of words, proper stress patterns, and
                    intonation that makes you easily understood.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-green-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-green-400 mb-3">
                    📚 Vocabulary
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Rich word bank for various situations – formal, informal,
                    professional, casual. Using the right words at the right
                    time.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-orange-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-orange-400 mb-3">
                    💪 Confidence
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Speaking without fear of mistakes, maintaining eye contact,
                    and expressing yourself boldly in any situation.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-pink-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-pink-400 mb-3">
                    👂 Listening Skills
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Understanding various accents, following conversations, and
                    responding appropriately. Communication is two-way!
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">
                    🎭 Body Language
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Non-verbal communication, gestures, facial expressions that
                    complement and enhance your spoken message.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 - Why */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                🌍 Why Spoken English is Crucial in Today's World
              </h2>

              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 mb-8">
                <p className="text-xl text-gray-300 leading-relaxed mb-4">
                  English is the{" "}
                  <strong className="text-primary">
                    global language of business, technology, science, and
                    opportunity
                  </strong>
                  . Over 1.5 billion people speak English worldwide, and it's
                  the official language of 67 countries.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  But here's what matters:{" "}
                  <strong className="text-cyan-400">
                    Spoken English opens doors that no other skill can
                  </strong>
                  . It's not just about language – it's about access to
                  opportunities.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                Why You Need Excellent Spoken English:
              </h3>

              <div className="space-y-6">
                <div className="bg-gray-900/50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-blue-400 mb-3">
                    🚀 Career Advancement
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Studies show that{" "}
                    <strong className="text-primary">
                      professionals with good English communication earn 30-40%
                      more
                    </strong>{" "}
                    than those without it. Whether it's interviews,
                    presentations, or client meetings – your ability to
                    communicate clearly determines your success.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    "I lost three job opportunities not because of my technical
                    skills, but because I couldn't express myself confidently in
                    English." – Common story in tech industry
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-green-400 mb-3">
                    🌐 Global Opportunities
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Want to work for Google, Microsoft, or any international
                    company? Want to study abroad? Collaborate with global
                    teams? Attend international conferences?{" "}
                    <strong className="text-primary">
                      English is your passport.
                    </strong>{" "}
                    Without it, you're limited to local opportunities.
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-purple-400 mb-3">
                    💼 Professional Credibility
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    When you speak English fluently, people perceive you as more{" "}
                    <strong className="text-cyan-400">
                      educated, professional, and competent
                    </strong>{" "}
                    – even if your skills are the same. It's about impression
                    and influence. Leaders who communicate well are the ones who
                    get promoted.
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-orange-400 mb-3">
                    🎓 Access to Knowledge
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    The best courses, research papers, tutorials, books, and
                    resources are in English.{" "}
                    <strong className="text-primary">
                      90% of online content is in English.
                    </strong>{" "}
                    Want to learn from MIT, Stanford, or top tech experts? You
                    need English.
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-pink-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-pink-400 mb-3">
                    🤝 Networking & Relationships
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Build connections with people from different countries,
                    cultures, industries. Join international communities.
                    Collaborate on global projects.{" "}
                    <strong className="text-cyan-400">
                      Your network determines your net worth
                    </strong>{" "}
                    – and English expands your network globally.
                  </p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">
                    😌 Personal Confidence
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Imagine walking into any room, any situation, and feeling{" "}
                    <strong className="text-primary">
                      confident that you can express yourself clearly
                    </strong>
                    . No more anxiety, no more avoiding conversations, no more
                    feeling left out. That's the power of spoken English.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-400 mb-3">
                  ⚠️ The Cost of NOT Learning:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    Missing job opportunities because you couldn't communicate
                    in interviews
                  </li>
                  <li>
                    Being passed over for promotions given to better
                    communicators
                  </li>
                  <li>Struggling in meetings while others lead discussions</li>
                  <li>Limited to local jobs when global opportunities exist</li>
                  <li>
                    Feeling inferior or anxious in English-speaking environments
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 - Common Challenges */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                🚧 Common Challenges (And How to Overcome Them)
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-yellow-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">
                    1. Fear of Making Mistakes
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong className="text-red-400">Problem:</strong> "What if
                    I say something wrong? People will laugh at me."
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-green-400">Solution:</strong>{" "}
                    Mistakes are how you learn! Native speakers make mistakes
                    too. Focus on communication, not perfection. Every mistake
                    is progress.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-blue-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-blue-400 mb-3">
                    2. Limited Vocabulary
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong className="text-red-400">Problem:</strong> "I can't
                    find the right words to express my thoughts."
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-green-400">Solution:</strong> Learn
                    in context, not from dictionaries. Watch English content,
                    read, and use new words immediately. 10 new words/day =
                    3,650 words/year!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-purple-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-purple-400 mb-3">
                    3. Pronunciation Issues
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong className="text-red-400">Problem:</strong> "People
                    don't understand my accent."
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-green-400">Solution:</strong>{" "}
                    Practice with native speakers, use apps like ELSA Speak,
                    record yourself, focus on clarity over accent. Your accent
                    is unique – own it!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-green-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-green-400 mb-3">
                    4. Lack of Practice Opportunities
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong className="text-red-400">Problem:</strong> "No one
                    around me speaks English."
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-green-400">Solution:</strong> Join
                    online communities, language exchange apps (HelloTalk,
                    Tandem), speak with AI chatbots, narrate your day in
                    English, join English-speaking groups.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 - Career Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
                💼 Career Paths Enhanced by Spoken English
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Spoken English isn't just a skill – it's a{" "}
                <strong className="text-primary">
                  multiplier that enhances every career path
                </strong>
                . Here's how it transforms different professions:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    💻 Tech Professionals
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Present technical concepts to non-technical stakeholders,
                    lead meetings, mentor teams, ace interviews at MNCs.
                  </p>
                  <p className="text-green-400 font-semibold text-sm">
                    Salary boost: 30-50%
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">
                    👔 Business & Management
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Client presentations, negotiations, international deals,
                    team leadership, networking at conferences.
                  </p>
                  <p className="text-green-400 font-semibold text-sm">
                    Essential for C-suite roles
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    🎓 Teachers & Trainers
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Conduct workshops, create online courses, teach
                    internationally, become corporate trainers.
                  </p>
                  <p className="text-green-400 font-semibold text-sm">
                    Global reach opportunities
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">
                    📢 Sales & Marketing
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Pitch to international clients, create compelling
                    presentations, close high-value deals, build global
                    networks.
                  </p>
                  <p className="text-green-400 font-semibold text-sm">
                    Higher commission earnings
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">
                    🏥 Healthcare Professionals
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Work abroad, present research at international conferences,
                    collaborate with global medical teams.
                  </p>
                  <p className="text-green-400 font-semibold text-sm">
                    Overseas opportunities
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-pink-400 mb-3">
                    ✈️ Hospitality & Tourism
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Serve international guests, work at luxury hotels, become
                    tour guides, cruise ship careers.
                  </p>
                  <p className="text-green-400 font-semibold text-sm">
                    Travel while you work
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-primary/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                  🎯 Specific Career Opportunities:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>English Teacher/Trainer</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Corporate Trainer</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Content Creator/YouTuber</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Podcast Host</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Voice-over Artist</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Customer Success Manager</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>International Sales Rep</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Conference Speaker</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Tips Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-primary/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  🌟 Quick Tips to Improve Spoken English
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Think in English</strong> – Stop translating from
                      your native language
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Practice daily</strong> – Even 15 minutes of
                      speaking practice daily = massive improvement
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Watch English content</strong> – Movies, series,
                      YouTube with subtitles
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Speak with confidence</strong> – Body language
                      matters as much as words
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      <strong>Join English communities</strong> – Practice with
                      peers who are learning too
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Communication?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Join CodeSell Academy's Spoken English course and unlock global
                opportunities!
              </p>
              <Link
                to="/courses"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                Start Speaking Confidently →
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Spoken;
