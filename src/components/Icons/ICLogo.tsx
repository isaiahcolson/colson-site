import React from "react";

interface Props {
  className: string;
}

function ICLogo({ className }: Props) {
  return (
    <svg
      className={className}
      width="528"
      height="480"
      viewBox="0 0 528 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="144" height="480" rx="28.8" fill="#F2F0EF" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M504 230.371V451.2C504 457.178 505.821 462.731 508.94 467.334C495.588 471.852 481.787 475.212 467.681 477.333C410.851 485.877 352.842 473.745 304.198 443.142C255.555 412.54 219.508 365.498 202.61 310.57C185.711 255.641 189.084 196.473 212.115 143.82C235.146 91.1679 276.305 48.5275 328.111 23.6508C379.916 -1.22597 438.929 -6.68741 494.42 8.25931C499.318 9.5786 504.16 11.0492 508.94 12.6667C505.821 17.2693 504 22.8219 504 28.8V192.064C493.764 203.311 494.954 219.948 504 230.371Z"
        fill="#F2F0EF"
      />
      <mask
        id="mask0_18_46"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="192"
        y="11"
        width="336"
        height="458"
      >
        <rect
          x="192"
          y="11"
          width="336"
          height="458"
          rx="28.8"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_18_46)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M529.213 459.496C499.496 472.677 466.603 480 432 480C299.452 480 192 372.548 192 240C192 107.452 299.452 0 432 0C466.603 0 499.496 7.32309 529.213 20.504C528.424 23.1311 528 25.916 528 28.8V451.2C528 454.084 528.424 456.869 529.213 459.496Z"
          fill="#F2F0EF"
        />
      </g>
    </svg>
  );
}

export { ICLogo };
