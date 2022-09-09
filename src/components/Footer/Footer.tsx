import React from "react";
import youtubeIcon from "../../public/youtube-icon.png";
import githubIcon from "../../public/github-icon.png";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex py-4 px-4 items-center justify-between">
      <p className="text-gray-50 text-xs p-2">&copy; {year} Isaiah Colson</p>

      <div className="flex">
        <a
          className="p-2 block"
          href="https://www.youtube.com/isaiahcolson"
          target="_blank"
        >
          <img
            alt="link to YouTube channel"
            className="h-5"
            src={youtubeIcon}
          />
        </a>

        <a
          className="p-2 block"
          href="https://github.com/isaiahcolson"
          target="_blank"
        >
          <img alt="link to GitHub account" className="h-5" src={githubIcon} />
        </a>
      </div>
    </div>
  );
}

export { Footer };
