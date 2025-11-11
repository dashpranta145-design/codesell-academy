import React, { useState } from "react";
import { ChevronDownIcon } from "./Icons/Icons";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "আপনাদের একাডেমিতে কী কী কোর্স করানো হয়?",
    answer:
      "আমাদের একাডেমিতে বর্তমানে রয়েছে - Computer Fundamental, Web Development , Digital Marketing, Spoken English। প্রতিটি কোর্সই সাজানো হয়েছে ইন্ডাস্ট্রি রিকোয়ারমেন্টস ও প্র্যাকটিক্যাল স্কিল ডেভেলপমেন্টের ওপর ভিত্তি করে ।",
  },
  {
    question: "আমি কিভাবে বুঝব কোন কোর্সটি আমার জন্য উপযুক্ত?",
    answer:
      "আমরা প্রতিটি শিক্ষার্থীর জন্য ফ্রি কাউন্সেলিং সেশনের ব্যবস্থা রাখি। সেখানে আপনার আগ্রহ, লক্ষ্য ও ভবিষ্যৎ ক্যারিয়ার প্ল্যান অনুযায়ী আমাদের এক্সপার্ট টিম আপনাকে উপযুক্ত কোর্সটি বেছে নিতে সহায়তা করবে। আর সাথে রয়েছে আমাদের ফ্রী ট্রায়াল ক্লাস ।",
  },
  {
    question: "এই কোর্সগুলো কি আমার ক্যারিয়ার গড়ার জন্য যথেষ্ট?",
    answer:
      "আমাদের কোর্সগুলো শুধু থিউরেটিকাল নয়, বরং প্র্যাকটিক্যাল টাস্কস , রিয়েল–লাইফ প্রজেক্টস  এবং গাইডলাইনসহ তৈরি করা হয়েছে, যাতে কোর্স শেষে আপনি সরাসরি মার্কেটপ্লেস বা প্রফেশনাল ফিল্ডে কাজ শুরু থেকে নিয়ে রিমোট জব করতে পারেন দেশ ও দেশের বাহিরে ।",
  },
  {
    question: "কেন আমি এই একাডেমি থেকে কোর্স করব?",
    answer:
      "আমাদের একাডেমি শুধুমাত্র স্কিল শেখায় না, রিয়েল প্রজেক্টসে  তার প্রয়োগ ও নিশ্চিত ক্যারিয়ার গড়তে সঠিক নির্দেশনা দিয়ে সাথে থাকে । অভিজ্ঞ ইন্সট্রাক্টর, গোছানো মডিউল, প্র্যাকটিক্যাল প্রজেক্টস, আপডেটেড কনটেন্ট এবং সাপোর্টের মাধ্যমে আমরা আপনাকে আপনার ফিল্ডে কনফিডেন্ট করে তুলব যা আপনার ক্যারিয়ার নিশ্চিত করতে সহায়তা করবে ।",
  },
];

const AccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b-1 border-primary/20">
      <button
        className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg md:text-xl font-semibold text-white hover:text-cyan-200">
          {item.question}
        </h3>
        <ChevronDownIcon
          className={`w-6 h-6 text-primary flex-shrink-0 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-gray-300">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="bg-gray-900 rounded-2xl shadow-lg border border-primary/20">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
