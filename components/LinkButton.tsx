import clsx from "clsx";
import React, {
  AnchorHTMLAttributes,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

type ButtonProps = {
  variant: "transparent" | "blue" | "red";
  border?: "white";
  className?: string;
  children?: ReactNode;
} & NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkButton: FunctionComponent<ButtonProps> = ({
  children,
  className,
  variant,
  border,
  ...props
}) => {
  return (
    <NextLink
      {...props}
      className={clsx(
        "text-[3vw] sm:text-xs py-2 px-4 sm:py-3 sm:px-9 rounded m-2 text-sm text-center transition-all duration-300 text-white uppercase",
        variant === "transparent" && "bg-transparent",
        variant === "transparent" && "hover:bg-[#002f5f] ",
        variant === "blue" && "bg-[#08c]",
        variant === "blue" && "hover:bg-[#002f5f]",
        variant === "red" && "bg-[#e96656]",
        variant === "red" && "hover:bg-[#fc6d6d]",
        border === "white" && "border border-white hover:border-transparent",
        className
      )}
    >
      {children}
    </NextLink>
  );
};

export default LinkButton;
