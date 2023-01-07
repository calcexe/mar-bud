import clsx from "clsx";
import React, { FunctionComponent, HTMLAttributes } from "react";

type PageTitleProps = {} & HTMLAttributes<HTMLHeadingElement>;

const PageTitle: FunctionComponent<PageTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={clsx(
        "text-xl text-white relative w-fit",
        "after:absolute after:-bottom-2 after:left-0 after:-right-8 after:h-[2px] after:bg-[#08c]",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default PageTitle;
