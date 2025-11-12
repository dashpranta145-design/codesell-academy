import React from "react";
import { Link } from "react-router-dom";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    name: "Sweety Reza",
    role: "Co-Ordinator & Speaking Trainer",
    image: "/images/Sweety.png",
  },
  {
    name: "Sajib Das Rinku",
    role: "Lead Course Designer",
    image: "/images/sajib.jpg",
  },
  {
    name: "Anik Das",
    role: "Mentor of Web-development",
    image: "/images/Anik-Das.png",
  },
  {
    name: "Mst. Babli",
    role: "Trainer of Digital Marketing",
    image: "/images/Babli.png",
  },
];

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image }) => (
  <div className="relative group w-full h-80 rounded-2xl overflow-hidden shadow-lg">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-1/4 group-hover:translate-y-0 transition-transform duration-500">
      <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
      <p className="text-primary text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
        {role}
      </p>
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg relative">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Our Team Members
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamData.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
        <div className="mt-12">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            See All Team Members
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
