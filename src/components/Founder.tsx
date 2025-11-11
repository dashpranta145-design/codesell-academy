import React from "react";

const Founder: React.FC = () => {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="relative flex-shrink-0">
            <img
              src="src/images/Sanjit Dash.webp"
              alt="Sanjit Dash, Founder"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary"
            />
            <div className="absolute inset-0 rounded-full shadow-2xl shadow-primary/50 animate-pulse-slow"></div>
          </div>
          <div className="max-w-2xl text-center lg:text-left">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-orange mb-2">
              Meet the Founder
            </h2> */}
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Sanjit Dash
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm Sanjit Dash, the founder of CodeSell Academy. I built this
              platform to empower learners with practical, industry-ready skills
              and guide them toward starting meaningful careers in the tech
              world with confidence.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With 3+ years of experience in freelancing, project building, and
              training, I aim to make technical education accessible and
              beginner-friendly. Let’s grow together and shape a successful
              digital future!
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-400">
              "পরিবর্তন চাও? শুরু করো নিজের ভেতর থেকে।"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
