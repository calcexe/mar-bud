import React, { FunctionComponent, ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import clsx from "clsx";

type LinkProps = {
  variant: "gray" | "white";
  children?: ReactNode;
} & NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: FunctionComponent<LinkProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <NextLink
      className={clsx(
        "duration-700 transition-all text-lg md:text-base w-fit",
        variant === "gray" && "text-[#939393] hover:text-white",
        variant === "white" && "text-white hover:text-[#329fd6]",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
