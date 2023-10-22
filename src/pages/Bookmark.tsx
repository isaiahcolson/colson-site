import {
  BookShelfIcon,
  BookmarkIcon,
  CableFreeIcon,
  MessageIcon,
  RoundedCornersIcon,
  TouchIcon,
} from "../components/Icons";

function Bookmark() {
  return (
    <>
      <div className="text-center mb-16 p-16 bg-gray-10">
        <p className="text-3 leading-normal lg:text-5">Introducing</p>
        <h1 className="text-6 font-semibold leading-normal lg:text-9">
          Bookmark
        </h1>
      </div>

      <div className="px-6 mb-24 max-w-xl mx-auto">
        <p className="text-5 leading-normal font-semibold mb-2 lg:text-6">
          Design
        </p>

        <p className="text-gray-60 mb-6 lg:text-3">
          Bookmark is the result of a simple prompt–what would a bookmark
          designed by Apple look like?
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 h-8">
            <div className="w-5 h-8 flex justify-center items-center lg:w-6">
              <BookmarkIcon className="w-auto lg:h-[26px]" />
            </div>
            <p className="text-1 lg:text-3">Simple design</p>
          </div>
          <div className="flex items-center gap-2 h-8">
            <div className="w-5 h-8 flex justify-center items-center lg:w-6">
              <BookShelfIcon className="w-auto lg:w-6" />
            </div>
            <p className="text-1 lg:text-3">Broad applicability</p>
          </div>
          <div className="flex items-center gap-2 h-8">
            <div className="w-5 h-8 flex justify-center items-center lg:w-6">
              <TouchIcon className="w-auto lg:w-6" />
            </div>
            <p className="text-1 lg:text-3">Soft touch finish</p>
          </div>
          <div className="flex items-center gap-2 h-8">
            <div className="w-5 h-8 flex justify-center items-center lg:w-6">
              <MessageIcon className="w-auto lg:h-[26px]" />
            </div>
            <p className="text-1 lg:text-3">Status messages</p>
          </div>
          <div className="flex items-center gap-2 h-8">
            <div className="w-5 h-8 flex justify-center items-center lg:w-6">
              <RoundedCornersIcon className="w-auto lg:w-6" />
            </div>
            <p className="text-1 lg:text-3">Rounded corners</p>
          </div>
          <div className="flex items-center gap-2 h-8">
            <div className="w-5 h-8 flex justify-center items-center lg:w-6">
              <CableFreeIcon className="w-auto lg:w-6" />
            </div>
            <p className="text-1 lg:text-3">Cable free</p>
          </div>
        </div>
      </div>

      <div className="px-6 max-w-xl mx-auto">
        <div className="mb-24">
          <div className="h-[240px] bg-gray-10 mb-6 rounded-lg lg:h-[360px]"></div>

          <p className="text-5 font-semibold leading-normal mb-2 lg:text-6">
            All The Feels
          </p>

          <p className="leading-normal lg:text-3">
            Printed on 24-point card stock with a premium, soft touch matte
            finish. Not to mention rounded corners so you don't hurt your
            fingies.
          </p>
        </div>

        <div className="mb-24">
          <div className="h-[240px] bg-gray-10 mb-6 rounded-lg lg:h-[360px]"></div>

          <p className="text-5 font-semibold leading-normal mb-2 lg:text-6">
            Tabulous
          </p>

          <p className="leading-normal lg:text-3">
            Magic happens on the backside with state-of-the-art messaging that
            enhances your reading experience. Do you hear that? Your books are
            saying, “Read me.”
          </p>
        </div>

        <div className="mb-28">
          <div className="h-[240px] bg-gray-10 mb-6 rounded-lg lg:h-[360px]"></div>

          <p className="text-5 font-semibold leading-normal mb-2 lg:text-6">
            Made For All Genres
          </p>

          <p className="leading-normal lg:text-3">
            Bookmark is your companion on every literary journey. It can be your
            navigator through the cosmos or your partner in a murder mystery.
          </p>
        </div>
      </div>

      <div className="bg-gray-10 py-12">
        <div className="text-center">
          <h2 className="text-6 font-font-semibold leading-normal lg:text-9">
            Phone Stand
          </h2>

          <p className="text-3 mb-4 lg:text-5">
            Elevate your phone. Elevate your life.
          </p>

          <p className="text-2 text-gray-70 lg:text-3">Coming soon.</p>
        </div>
      </div>
    </>
  );
}

export { Bookmark };
