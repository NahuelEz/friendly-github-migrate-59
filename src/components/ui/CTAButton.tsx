
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-normal text-center rounded-[40px] transition-colors uppercase text-[22px] leading-normal px-[63px] py-[14px] w-full max-w-[310px]",
  {
    variants: {
      variant: {
        default: "bg-[#B762F7] text-white hover:bg-[#A651E6]",
        primary: "bg-[#4F1092] text-white hover:bg-[#3D0C70]",
        secondary: "bg-white text-[#4F1092] hover:bg-gray-100",
        outline: "border border-[#B762F7] text-[#B762F7] hover:bg-[#B762F7]/10",
        violet: "bg-[#B762F7] text-white hover:bg-[#A651E6]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const CTAButton: React.FC<CTAButtonProps> = ({
  className,
  variant,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
};

export default CTAButton;
