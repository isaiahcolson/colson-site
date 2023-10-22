interface Props {
  className: string;
}

function ICLogo({ className }: Props) {
  return (
    <svg
      className={className}
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" width="80" height="240" rx="8" fill="#191A1D" />
      <path
        d="M230 8C230 3.58172 226.414 -0.0277893 222.005 0.2664C193.099 2.19539 165.76 14.5347 145.147 35.1472C122.643 57.6515 110 88.174 110 120C110 151.826 122.643 182.348 145.147 204.853C165.76 225.465 193.099 237.805 222.005 239.734C226.414 240.028 230 236.418 230 232L230 120V8Z"
        fill="#191A1D"
      />
    </svg>
  );
}

export { ICLogo };
