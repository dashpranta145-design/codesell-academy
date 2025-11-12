import React from "react";

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
    title: "Spoken",
    description: "Transform the way you speak with this dynamic spoken course.",
    image: "/images/spoken-english.png",
  },
];

const CourseCard: React.FC<Course> = ({ title, description, image }) => (
  <div className="bg-gray-900 rounded-2xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/40 border border-transparent hover:border-primary/50">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href="/courses"
        className="font-semibold text-white group-hover:text-primary transition-colors duration-300"
      >
        See More &rarr;
      </a>
    </div>
  </div>
);

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
          <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Our Courses
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
