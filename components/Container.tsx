import clsx from "clsx";
import React, { FunctionComponent, HTMLAttributes } from "react";

type ContainerProps = {
  variant: "blue" | "gray" | "red" | "darkgray";
} & HTMLAttributes<HTMLDivElement>;

const Container: FunctionComponent<ContainerProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "w-full flex justify-center px-16",
        variant === "blue" && "bg-[rgba(0,136,204,0.7)]",
        variant === "gray" && "bg-[#292929]",
        variant === "red" && "bg-[#e96656]",
        variant === "darkgray" && "bg-[#171717]",
        className
      )}
      {...props}
    >
      <div className="max-w-6xl w-full">{children}</div>
    </div>
  );
};

export default Container;
