import React, { useState } from "react";
import Header from "./Header";

import FloatingBackground from "./FloatingBackground";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  experience: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sanjit Dash",
    role: "Founder & Lead Instructor",
    image: "src/images/Sanjit Dash.webp",
    bio: "Passionate educator with 3+ years of experience in web development and digital marketing. Dedicated to making tech education accessible to everyone.",
    expertise: [
      "Web Development",
      "Digital Marketing",
      "Entrepreneurship",
      "Mentoring",
    ],
    experience: "3+ years in IT Industry",
  },
  {
    id: 2,
    name: "Sweety Reza",
    role: "Co-Ordinator & Trainer",
    image: "src/images/Sweety.png",
    bio: "Expert coordinator ensuring smooth operations and quality training delivery. Specializes in student engagement and curriculum development.",
    expertise: [
      "Project Management",
      "Training Coordination",
      "Quality Assurance",
      "Student Success",
    ],
    experience: "1 years in Education",
  },
  {
    id: 3,
    name: "Sajib Das Rinku",
    role: "Lead Course Designer",
    image: "src/images/sajib.jpg",
    bio: "Creative course designer who transforms complex technical concepts into engaging, easy-to-understand learning experiences.",
    expertise: [
      "Frontend Development",
      "Instructional Design",
      "Curriculum Development",

      "Content Creation",
    ],
    experience: "2 years in EdTech",
  },
  {
    id: 4,
    name: "Mst. Babli",
    role: "Lead Trainer Of Digital Marketing",
    image: "src/images/Babli.png",
    bio: "Dedicated to student success with a focus on personalized support, career guidance, and ensuring every student achieves their goals.",
    expertise: [
      "Digital Marketing",
      "Content Creation",
      "Front-End Development",
      "Student Support",
      "Mentorship",
    ],
    experience: "2 years in Local Marketplace",
  },
  {
    id: 5,
    name: "Samiya Rahman Khadiza",
    role: "Trainer of Front-End Develeopment",
    image: "/images/Khadiza.png",
    bio: "Expertise in creating industry-relevant, hands-on learning programs that prepare students for real-world challenges.",
    expertise: [
      "Front-End Development",
      "UI/UX Design",
      "Industry Research",

      "Learning Analytics",
    ],
    experience: "1 years in Local Marketplace",
  },
  {
    id: 6,
    name: "Anik Das",
    role: "Mentor Of Web-Development",
    image: "src/images/Anik-Das.png",
    bio: "Expert in guiding learners through modern tools, clean coding practices, and real-world problem-solving to grow into confident, professional web developers.",
    expertise: ["Back-End Development", "MERN", "DSA", "Career Guidance"],
    experience: "2 years in Building Web Application",
  },
  {
    id: 7,
    name: "Mohammad Towhidul Islam",
    role: "Trainer Of Digital Marketing",
    image: "src/images/Tawhid.png",
    bio: "Specialized in delivering practical, market-driven digital marketing training that prepares learners to excel in real business environments.",
    expertise: ["Digital Marketing", "Wordpress", "Entrepreneurship"],
    experience: "2 years in global & local marketplace",
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={`relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-primary/20 transition-all duration-500 ${
          isExpanded ? "scale-105 z-10" : ""
        }`}
      >
        {/* Image Section */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-primary">{member.role}</p>
          </div>
        </div>

        {/* Expanded Details */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-950">
            <p className="text-gray-300 mb-4 leading-relaxed">{member.bio}</p>

            <div className="mb-4">
              <h4 className="text-primary font-semibold mb-2">Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-gray-400">
                <span className="text-primary font-semibold">Experience:</span>{" "}
                {member.experience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen relative">
      <FloatingBackground />
      <Header />

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Meet Our Expert Team
            </span>
          </h1>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-3xl mx-auto">
            Our dedicated team of experienced professionals is committed to
            providing world-class education and mentorship to help you achieve
            your career goals.
          </p>

          {/* Team Overview Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                What Drives Us
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
                <div>
                  <p className="mb-4">
                    At CodeSell Academy, we believe that great education comes
                    from passionate educators who care deeply about student
                    success. Our team consists of industry experts, experienced
                    educators, and dedicated support staff who work together to
                    create an exceptional learning environment.
                  </p>
                  <p>
                    Each team member brings unique expertise and real-world
                    experience, ensuring that our students receive practical,
                    industry-relevant training that prepares them for successful
                    careers in tech.
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        1+
                      </div>
                      <div className="text-sm text-gray-400">
                        Years Combined Experience
                      </div>
                    </div>
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        100+
                      </div>
                      <div className="text-sm text-gray-400">
                        Students Mentored
                      </div>
                    </div>
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        95%
                      </div>
                      <div className="text-sm text-gray-400">Success Rate</div>
                    </div>
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        24/7
                      </div>
                      <div className="text-sm text-gray-400">
                        Student Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-primary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-gray-400 mb-6 max-w-xl">
                We're always looking for passionate educators and tech experts
                to join our growing team.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                <a href="/contact"> Apply Now →</a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamPage;
