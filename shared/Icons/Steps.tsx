import React from "react";
import type { IconProps } from "./props";

const Steps = ({
  size = "1em",
  fill = "currentColor",
  className,
  style,
}: IconProps) => {
  return (
    <svg
      height={size}
      width={size}
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4C3 3.73478 3.10535 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H8C8.26522 3 8.51957 3.10536 8.70711 3.29289C8.89465 3.48043 9 3.73478 9 4V8C9 8.26522 8.89465 8.51957 8.70711 8.70711C8.51957 8.89464 8.26522 9 8 9H4C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10535 8.51957 3 8.26522 3 8V4Z"
        fill={fill === "currentColor" ? fill : undefined}
        className={`fill-${fill ? fill : "primary"}`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 10C9 9.73478 9.10535 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H14C14.2652 9 14.5196 9.10536 14.7071 9.29289C14.8946 9.48043 15 9.73478 15 10V14C15 14.2652 14.8946 14.5196 14.7071 14.7071C14.5196 14.8946 14.2652 15 14 15H10C9.73478 15 9.48043 14.8946 9.29289 14.7071C9.10535 14.5196 9 14.2652 9 14V10Z"
        fill={fill === "currentColor" ? fill : undefined}
        className={`fill-${fill ? fill : "primary"}`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 16C15 15.7348 15.1054 15.4804 15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15H20C20.2652 15 20.5196 15.1054 20.7071 15.2929C20.8946 15.4804 21 15.7348 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H16C15.7348 21 15.4804 20.8946 15.2929 20.7071C15.1054 20.5196 15 20.2652 15 20V16Z"
        fill={fill === "currentColor" ? fill : undefined}
        className={`fill-${fill ? fill : "primary"}`}
      />
    </svg>
  );
};

export default Steps;
