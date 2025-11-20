import React from "react";
import { Link } from "react-router-dom";

interface Course {
  title: string;
  description: string;
  image: string;
}

const coursesData: Course[] = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, JS and build full websites from scratch.",
    image: "/images/Web-Development1.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Master SEO, Facebook Ads, Google Ads and grow businesses.",
    image: "/images/digital-marketing.jpg",
  },
  {
    title: "Spoken English",
    description: "Transform the way you speak with this dynamic spoken course.",
    image: "/images/spoken-english.PNG",
  },
];

const CourseCard: React.FC<Course> = ({ title, description, image }) => (
  <div className="bg-gray-900 rounded-2xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/40 border border-transparent hover:border-primary/50 w-full max-w-sm lg:max-w-xs xl:max-w-sm">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      <Link
        to="/courses"
        className="inline-flex items-center font-semibold text-white group-hover:text-primary transition-colors duration-300"
      >
        See More &rarr;
      </Link>
    </div>
  </div>
);

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16">
          <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Our Courses
          </span>
        </h2>

        {/* Grid layout for proper responsive behavior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {coursesData.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>

        {/* View All Courses button */}
        <div className="mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
