
import React from "react";
import { cn } from "@/lib/utils";
import Button from "./Button";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
};

const ServiceCard = ({
  title,
  description,
  icon,
  className,
  href = "/services",
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 h-full flex flex-col",
      className
    )}>
      {icon && (
        <div className="mb-4 text-primary">{icon}</div>
      )}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
        <Button href={href} variant="text" className="p-0">
          Learn More →
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
