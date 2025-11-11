import React from "react";

interface WhyCodeSellItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const whyCodeSellData: WhyCodeSellItem[] = [
  {
    title: "Industry Validated Curriculum",
    description:
      "Learn up-to-date skills crafted from global industry demands to prepare you for real projects.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <polygon points="32 6 58 22 58 46 32 62 6 46 6 22" />
      </svg>
    ),
  },
  {
    title: "Personalized Mentorship",
    description:
      "Get dedicated guidance to unlock your potential and stay motivated throughout your journey.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path d="M16 48l16-32 16 32" />
        <line x1="16" y1="48" x2="48" y2="48" />
      </svg>
    ),
  },
  {
    title: "Hands-on Real-World Projects",
    description:
      "Build real-world applications with live client feedback to boost your portfolio and confidence.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      >
        <polyline points="16 34 28 46 48 18" />
      </svg>
    ),
  },
  {
    title: "Global Client Acquisition",
    description:
      "Learn how to attract and manage international clients with proven freelance business skills.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <circle cx="32" cy="32" r="14" />
        <path d="M32 18a24 24 0 0 1 0 28" />
        <path d="M18 32h28" />
      </svg>
    ),
  },
];

const WhyCodeSellCard: React.FC<WhyCodeSellItem> = ({
  title,
  description,
  icon,
}) => (
  <div className="relative bg-gray-950 rounded-xl p-5 pl-12 shadow-lg flex items-center cursor-pointer transition-all duration-300 hover:bg-gray-900 hover:scale-105 hover:shadow-blue-500/30 group before:content-[''] before:absolute before:left-4 before:top-[30%] before:w-1 before:h-[40%] before:bg-blue-400/70 before:rounded before:scale-y-0 before:transition-transform before:duration-400 hover:before:scale-y-100 hover:before:shadow-blue-400">
    <div className="w-9 h-9 mr-4 text-blue-400 flex-shrink-0 transition-all duration-300 flex justify-center items-center group-hover:text-blue-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,1)]">
      {icon}
    </div>
    <div>
      <h3 className="m-0 font-serif font-bold text-xl text-blue-300 tracking-wide transition-colors duration-300 group-hover:text-blue-200">
        {title}
      </h3>
      <p className="mt-1 mb-0 text-sm text-cyan-600 leading-relaxed max-w-xl transition-colors duration-300 group-hover:text-blue-400">
        {description}
      </p>
    </div>
  </div>
);

const WhyCodeSell: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 tracking-wider">
          <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
            Why CodeSell Academy?
          </span>
        </h2>
        <div className="max-w-4xl mx-auto grid gap-9">
          {whyCodeSellData.map((item, index) => (
            <WhyCodeSellCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCodeSell;
