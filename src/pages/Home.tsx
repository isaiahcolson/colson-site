// import { AnimatedTypography } from "../components/Animation";
import { Link } from "react-router-dom";
import { BookmarksHero } from "../components/Icons";

function Home() {
  return (
    <>
      {/* bookmark section */}
      <div className="mt-24 mb-[120px] lg:mt-36 lg:mb-40">
        <div className="text-center mb-16">
          <h1 className="text-6 font-semibold leading-normal lg:text-9">
            Bookmark
          </h1>

          <p className="text-3 mb-4 lg:text-5">Your books deserve better.</p>

          <Link
            className="text-2 hover:underline leading-normal text-blue-50 lg:text-3"
            to="/articles"
          >
            Learn More
          </Link>
        </div>

        <div className="flex justify-center">
          <BookmarksHero className="w-auto lg:h-[760px]" />
        </div>
      </div>

      {/* phone stand section */}
      <div className="bg-gray-10 py-12">
        <div className="text-center">
          <h2 className="text-6 font-semibold leading-normal lg:text-9">
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

export { Home };
