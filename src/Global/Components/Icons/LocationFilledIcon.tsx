import React from "react";
import { IIcons } from "./icons";

const LocationFilledIcon = ({ fillColor }: IIcons.IconProps) => (
  <svg
    width="12"
    height="15"
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 0C3.18064 0 0.900391 2.28025 0.900391 5.09961C0.900391 8.92432 6 14.5703 6 14.5703C6 14.5703 11.0996 8.92432 11.0996 5.09961C11.0996 2.28025 8.81936 0 6 0ZM2.35742 5.09961C2.35742 3.08891 3.9893 1.45703 6 1.45703C8.0107 1.45703 9.64258 3.08891 9.64258 5.09961C9.64258 7.19773 7.54445 10.3376 6 12.2973C4.48469 10.3522 2.35742 7.17588 2.35742 5.09961Z"
      fill={fillColor || "#A3AED0"}
    />
    <path
      d="M6.00024 6.92032C7.00611 6.92032 7.82153 6.1049 7.82153 5.09903C7.82153 4.09316 7.00611 3.27774 6.00024 3.27774C4.99437 3.27774 4.17896 4.09316 4.17896 5.09903C4.17896 6.1049 4.99437 6.92032 6.00024 6.92032Z"
      fill={fillColor || "#A3AED0"}
    />
  </svg>
);
export default LocationFilledIcon;
