
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md";

  const variantStyles = {
    primary: "bg-primary hover:bg-primary/90 text-white",
    secondary: "bg-secondary hover:bg-secondary/90 text-white",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/10",
    text: "bg-transparent text-primary hover:bg-primary/10",
  };

  const sizeStyles = {
    sm: "py-1 px-4 text-sm",
    md: "py-2 px-5 text-base",
    lg: "py-3 px-7 text-lg",
  };

  const buttonStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link to={href} className={buttonStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
