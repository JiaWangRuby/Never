import React from "react";
import { IIcons } from "./icons";

export const OnBoardIcon = ({ width, height, fillColor }: IIcons.IconProps) => (
  <svg
    width={width || "22"}
    height={height || "22"}
    viewBox="0 0 22 22"
    fill={fillColor || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8334 6.41667H9.16669V1.83333C9.16669 0.820417 9.9871 0 11 0V0C12.0129 0 12.8334 0.820417 12.8334 1.83333V6.41667Z"
      fill="#FEFEFE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.0833 4.58337H14.6667V8.25004H7.33333V4.58337H0.916667C0.410667 4.58337 0 4.99404 0 5.50004V21.0834C0 21.5894 0.410667 22 0.916667 22H21.0833C21.5893 22 22 21.5894 22 21.0834V5.50004C22 4.99404 21.5893 4.58337 21.0833 4.58337ZM7.33333 11C8.34625 11 9.16667 11.8205 9.16667 12.8334C9.16667 13.8463 8.34625 14.6667 7.33333 14.6667C6.32042 14.6667 5.5 13.8463 5.5 12.8334C5.5 11.8205 6.32042 11 7.33333 11ZM6.41667 15.5834C4.89775 15.5834 3.66667 16.8145 3.66667 18.3334H11C11 16.8145 9.76892 15.5834 8.25 15.5834H6.41667ZM18.3333 17.4167H12.8333V15.5834H18.3333V17.4167ZM12.8333 13.75H18.3333V11.9167H12.8333V13.75Z"
      fill="#FEFEFE"
    />
  </svg>
);
export default OnBoardIcon;
