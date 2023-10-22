// import youtubeIcon from "../../assets/youtube-icon.png";
// import githubIcon from "../../assets/github-icon.png";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-gray-10">
      <div className="max-w-7xl p-4 lg:p-6 my-0 mx-auto w-full">
        <p className="text-gray-60 text-1 md:text-sm">
          Copyright &copy; {year} Isaiah Colson All rights reserved.
        </p>

        {/* <div className="flex">
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
      </div> */}
      </div>
    </div>
  );
}

export { Footer };
