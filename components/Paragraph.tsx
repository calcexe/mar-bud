import clsx from "clsx";
import React, { FunctionComponent, HTMLAttributes } from "react";

type ParagraphProps = {} & HTMLAttributes<HTMLParagraphElement>;

const Paragraph: FunctionComponent<ParagraphProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p className={clsx("w-fit text-white text-base", className)} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
