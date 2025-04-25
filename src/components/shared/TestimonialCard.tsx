
import React from "react";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  author: string;
  company: string;
  industry?: string;
  image?: string;
  className?: string;
};

const TestimonialCard = ({
  quote,
  author,
  company,
  industry,
  image,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100",
      className
    )}>
      <div className="flex items-center mb-4">
        {image ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-lg">{author}</h4>
          <p className="text-sm text-gray-600">{company}</p>
          {industry && <p className="text-xs text-gray-500">{industry}</p>}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -left-2 -top-2 text-4xl text-primary opacity-20">"</div>
        <p className="text-gray-700 italic relative z-10 pl-3">{quote}</p>
        <div className="absolute -right-2 bottom-0 text-4xl text-primary opacity-20">"</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
