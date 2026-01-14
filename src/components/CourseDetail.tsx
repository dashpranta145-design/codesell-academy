import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import { Link, useLocation } from "react-router-dom";
import FloatingBackground from "./FloatingBackground";

interface Course {
  id: string;
  name: string;
  category: string;
  gradient: string;
  icon: string;
}

interface CourseContent {
  description: string;
  modules: string[];
  duration: string;
  fee: string;
}

const courses: Course[] = [
  {
    id: "computer-fundamental",
    name: "Computer Fundamental",
    category: "Foundation",
    gradient: "from-blue-500 to-cyan-500",
    icon: "💻",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    category: "Marketing",
    gradient: "from-pink-500 to-rose-500",
    icon: "📱",
  },
  {
    id: "frontend",
    name: "Front-end Development",
    category: "Development",
    gradient: "from-purple-500 to-indigo-500",
    icon: "🎨",
  },
  {
    id: "backend",
    name: "Back-end Development",
    category: "Development",
    gradient: "from-green-500 to-emerald-500",
    icon: "⚙️",
  },
  {
    id: "fullstack",
    name: "Full-Stack Development",
    category: "Development",
    gradient: "from-orange-500 to-amber-500",
    icon: "🚀",
  },
  {
    id: "dsa-python",
    name: "DSA with Python",
    category: "Programming",
    gradient: "from-teal-500 to-cyan-500",
    icon: "🐍",
  },
  {
    id: "programming",
    name: "Programming Basics",
    category: "Programming",
    gradient: "from-violet-500 to-purple-500",
    icon: "⌨️",
  },
  {
    id: "spoken",
    name: "Spoken English",
    category: "Communication",
    gradient: "from-red-500 to-pink-500",
    icon: "🗣️",
  },
  {
    id: "comp-spoken",
    name: "Computer + Spoken",
    category: "Combo",
    gradient: "from-blue-400 to-purple-400",
    icon: "💬",
  },
  {
    id: "dm-comp",
    name: "Digital Marketing + Computer",
    category: "Combo",
    gradient: "from-pink-400 to-orange-400",
    icon: "📊",
  },
  {
    id: "web-comp",
    name: "Web Development + Computer",
    category: "Combo",
    gradient: "from-indigo-400 to-cyan-400",
    icon: "🌐",
  },
];

const courseDetails: Record<string, CourseContent> = {
  "computer-fundamental": {
    description:
      "Master the fundamentals of computer science including hardware, software, operating systems, and basic troubleshooting. Perfect for beginners starting their tech journey.",
    modules: [
      "Introduction to Computers & Components",
      "Operating Systems (Windows/Linux basics)",
      "File Management & Organization",
      "Internet & Email Fundamentals",
      "MS Office Suite (Word, Excel, PowerPoint)",
      "Basic Troubleshooting & Maintenance",
      "Shortcut Keys",
      "Key Comparison",
    ],
    duration: "3 Months - 3 sessions/week (2 hours each)",
    fee: "BDT 3500",
  },
  "digital-marketing": {
    description:
      "Learn modern digital marketing strategies including SEO, social media marketing, content marketing, and paid advertising to grow businesses online.",
    modules: [
      "Digital Marketing Fundamentals",
      "SEO & Keyword Research",
      "Social Media Marketing (FB, Instagram, LinkedIn)",
      "Community-Based Marketing ( Reddit, Quora )",
      "Google Ads & Facebook Ads",
      "Content Marketing & Copywriting",
      "Analytics & Campaign Optimization",
      "Freelance Platforms ( A- Z )",
      "Live Projects & Practical Implementation",
    ],
    duration: "6 Months - 3 sessions/week (2 hours each)",
    fee: "BDT 15,000 (Installment available)",
  },
  frontend: {
    description:
      "Build beautiful, responsive websites using HTML, CSS, JavaScript, and modern frameworks. Create stunning user interfaces that work on any device.",
    modules: [
      "HTML5 & Semantic Structure",
      "CSS3, Flexbox & Grid",
      "Responsive Design & Mobile-First",
      "JavaScript ES6+ Fundamentals",
      "React.js Basics",
      "Real-World Projects",
      "Building Portfolio",
    ],
    duration: "6 Months - 3 sessions/week (2.5 hours each)",
    fee: "BDT 10,000 (Installment available)",
  },
  backend: {
    description:
      "Master server-side development with Node.js, databases, APIs, and authentication. Build powerful backend systems that power modern applications.",
    modules: [
      "Node.js & Express Fundamentals",
      "RESTful API Development",
      "Database Design (SQL & NoSQL)",
      "Authentication & Authorization",
      "Server Deployment & Hosting",
      "Real-World Backend Projects",
    ],
    duration: "6 Months - 3 sessions/week (2.5 hours each)",
    fee: "BDT 10,000 (Installment available)",
  },
  fullstack: {
    description:
      "Become a complete web developer by mastering both frontend and backend technologies. Build full-featured web applications from scratch.",
    modules: [
      "Frontend: HTML, CSS, JavaScript, React",
      "Backend: Node.js, Express, MongoDB",
      "RESTful APIs & Integration",
      "Authentication & Security",
      "Deployment & DevOps Basics",
      "Capstone Full-Stack Project",
    ],
    duration: "6 Months - 4 sessions/week (2.5 hours each)",
    fee: "BDT 15,000 (Installment available)",
  },
  "dsa-python": {
    description:
      "Master Data Structures and Algorithms using Python. Prepare for technical interviews and build problem-solving skills essential for software engineering.",
    modules: [
      "Python Programming Fundamentals",
      "Arrays, Lists & Linked Lists",
      "Stacks, Queues & Hash Tables",
      "Trees & Graph Algorithms",
      "Sorting & Searching Algorithms",
      "Problem-Solving & Interview Prep",
    ],
    duration: "4 Months - 3 sessions/week (2 hours each)",
    fee: "BDT 8,000 (Installment available)",
  },
  programming: {
    description:
      "Start your programming journey with fundamental concepts applicable to any language. Learn logic building, problem-solving, and basic programming principles.",
    modules: [
      "Programming Logic & Flowcharts",
      "Variables, Data Types & Operators",
      "Control Structures (If-else, Loops)",
      "Functions & Modular Programming",
      "Basic Problem Solving",
      "Introduction to OOP Concepts",
    ],
    duration: "2 Months - 3 sessions/week (2 hours each)",
    fee: "BDT 3,000 (Installment available)",
  },
  spoken: {
    description:
      "Improve your English communication skills for professional and personal growth. Focus on fluency, pronunciation, vocabulary, and confidence building.",
    modules: [
      "Grammar & Sentence Construction",
      "Vocabulary Building & Word Usage",
      "Pronunciation & Accent Training",
      "Conversation Practice & Role-plays",
      "Presentation Skills",
      "Interview & Professional Communication",
    ],
    duration: "3 Months - 3 sessions/week (1.5 hours each)",
    fee: "BDT 3500",
  },
  "comp-spoken": {
    description:
      "Combined package: Learn computer fundamentals while improving your English communication skills. Perfect for building a strong foundation in both areas.",
    modules: [
      "All Computer Fundamental Modules",
      "All Spoken English Modules",
      "Integrated Practice Sessions",
      "Tech Vocabulary & Communication",
    ],
    duration: "3 Months - 4 sessions/week (2 hours each)",
    fee: "BDT 5,000 (Save BDT 1,000 with combo!)",
  },
  "dm-comp": {
    description:
      "Combined package: Master digital marketing fundamentals along with essential computer skills. Ideal for aspiring digital marketers and entrepreneurs.",
    modules: [
      "All Computer Fundamental Modules",
      "All Digital Marketing Modules",
      "Practical Marketing Projects",
      "Tool Integration",
    ],
    duration: "6 Months - 4 sessions/week (2 hours each)",
    fee: "BDT 11,000 (Save BDT 2,000 with combo!)",
  },
  "web-comp": {
    description:
      "Combined package: Learn web development from scratch including computer basics. Perfect for absolute beginners wanting to become web developers.",
    modules: [
      "All Computer Fundamental Modules",
      "All Frontend Development Modules",
      "Integrated Web Projects",
      "Career Guidance & Portfolio Building",
    ],
    duration: "6 Months - 4 sessions/week (2.5 hours each)",
    fee: "BDT 11,000 (Save BDT 2,000 with combo!)",
  },
};

const CourseDetail: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>(
    "computer-fundamental"
  );
  const [activeTab, setActiveTab] = useState<
    "description" | "modules" | "duration" | "fee"
  >("description");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const currentCourse = courses.find((c) => c.id === selectedCourse);
  const currentContent = courseDetails[selectedCourse];

  // Function to get course ID from URL parameters
  const getCourseFromURL = () => {
    const params = new URLSearchParams(location.search);
    return params.get("course");
  };

  // Handle URL parameters on component mount and URL changes
  useEffect(() => {
    const courseFromURL = getCourseFromURL();
    if (
      courseFromURL &&
      courses.some((course) => course.id === courseFromURL)
    ) {
      setSelectedCourse(courseFromURL);
      setActiveTab("description");

      // Scroll to description section after a short delay
      setTimeout(() => {
        contentRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 500);
    }
  }, [location.search]);

  const handleCourseSelect = (id: string) => {
    setSelectedCourse(id);
    setActiveTab("description");

    // Update URL without page reload
    const newUrl = `${window.location.pathname}?course=${id}`;
    window.history.pushState({}, "", newUrl);

    // Smooth scroll to the detail section
    setTimeout(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Course Description
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentContent.description}
            </p>
          </div>
        );
      case "modules":
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Course Modules
            </h3>
            <ul className="space-y-3">
              {currentContent.modules.map((module, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 text-cyan-400 font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <span className="text-lg pt-1">{module}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case "duration":
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Course Duration
            </h3>
            <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-500/30 rounded-xl p-6">
              <p className="text-xl text-gray-200 font-semibold">
                {currentContent.duration}
              </p>
            </div>
          </div>
        );
      case "fee":
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Course Fee
            </h3>
            <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-500/30 rounded-xl p-6">
              <p className="text-2xl text-gray-200 font-bold">
                {currentContent.fee}
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-black min-h-screen relative">
      <FloatingBackground />
      <Header />

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Course Details
            </span>
          </h1>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Explore our comprehensive courses and find the perfect fit for your
            career goals
          </p>

          {/* Course Selection Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Select a Course
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {courses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => handleCourseSelect(course.id)}
                  className={`relative group overflow-hidden rounded-xl p-4 transition-all duration-300 ${
                    selectedCourse === course.id
                      ? "ring-2 ring-cyan-400 scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                  ></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <span className="text-xs font-semibold text-cyan-400 mb-1 block">
                      {course.category}
                    </span>
                    <h3 className="text-white font-bold">{course.name}</h3>
                  </div>
                  {selectedCourse === course.id && (
                    <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Course Content Section */}
          <div ref={contentRef} className="relative scroll-mt-[140px]">
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border-2 border-cyan-500/20 rounded-2xl overflow-hidden">
              <div
                className={`p-6 bg-gradient-to-r ${currentCourse?.gradient} bg-opacity-10 border-b border-cyan-500/20`}
              >
                <h2 className="text-3xl font-bold text-white">
                  {currentCourse?.name}
                </h2>
                <p className="text-cyan-200 mt-1">{currentCourse?.category}</p>
              </div>

              <div className="grid lg:grid-cols-4">
                <div className="lg:col-span-1 border-r border-cyan-500/20 p-4 space-y-2">
                  {[
                    { id: "description", label: "Description", icon: "📋" },
                    { id: "modules", label: "Modules", icon: "📚" },
                    { id: "duration", label: "Duration", icon: "⏱️" },
                    { id: "fee", label: "Fee", icon: "💰" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-400 border-l-4 border-cyan-400"
                          : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                      }`}
                    >
                      <span className="text-xl">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-3 p-8 min-h-[400px]">
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Learning?
              </h3>
              <p className="text-gray-400 mb-6">
                Join thousands of successful students and transform your career
                today
              </p>
              <button>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  Enroll Now →
                </Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
