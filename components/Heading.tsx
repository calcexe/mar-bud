import clsx from "clsx";
import React, { FunctionComponent, HTMLAttributes } from "react";

type HeadingProps = {
  variant: "h1" | "h2";
} & HTMLAttributes<HTMLHeadingElement>;

const Heading: FunctionComponent<HeadingProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  const Variant = variant;
  return (
    <Variant
      className={clsx(
        "uppercase transition-transform duration-500 text-white text-center",
        "hover:scale-110",
        variant === "h1" && "text-[min(7vw,55px)]",
        variant === "h2" && "text-[6.2vw] md:text-[45px]",
        className
      )}
      {...props}
    >
      {children}
    </Variant>
  );
};

export default Heading;
