interface Props {
  className?: string;
}

function RoundedCornersIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.11332 0.38623C2.18362 0.38623 0 2.64431 0 7.27628V13.0497C0 14.7619 0.868486 15.6138 2.59719 15.6138H17.4028C19.1315 15.6138 20 14.7536 20 13.0497V7.27628C20 2.64431 17.8164 0.38623 12.8949 0.38623H7.11332Z"
        fill="#191A1D"
      />
    </svg>
  );
}

export { RoundedCornersIcon };
