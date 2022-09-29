import React from "react";
import youtubeIcon from "../../assets/youtube-icon.png";
import githubIcon from "../../assets/github-icon.png";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex py-4 -m-2 items-center justify-between">
      <p className="text-gray-60 text-xs p-2 md:text-sm">
        &copy; {year} Isaiah Colson
      </p>

      <div className="flex">
        <a
          className="p-2 block md:p-3"
          href="https://www.youtube.com/isaiahcolson"
          target="_blank"
        >
          <img
            alt="link to YouTube channel"
            className="h-5 md:h-6"
            src={youtubeIcon}
          />
        </a>

        <a
          className="p-2 block md:p-3"
          href="https://github.com/isaiahcolson"
          target="_blank"
        >
          <img
            alt="link to GitHub account"
            className="h-5 md:h-6"
            src={githubIcon}
          />
        </a>
      </div>
    </div>
  );
}

export { Footer };
