import React from "react";
import { Link } from "react-router-dom";

function Articles() {
  return (
    <div className="py-12 md:py-16 max-w-xl mx-auto">
      <div className="pb-8">
        <div className="pb-12 md:text-center md:pb-16">
          <h2 className="text-4xl md:text-5xl font-black">Articles</h2>

          <p className="md:text-xl">Read my crap.</p>
        </div>

        <Link to="/articles/001">
          <p className="text-sm text-gray-50 md:text-base">
            September 22, 2022
          </p>

          <p className="font-bold py-2 md:text-xl overflow-hidden text-ellipsis whitespace-nowrap">
            How to Organize Your Z-Index Using Sass
          </p>

          <p className="text-gray-50 md:text-xl overflow-hidden text-ellipsis whitespace-nowrap">
            How many times have you tried to add a new piece of styling that
            required adding a z-index property and you found that there is no
            organization for the z-axis of your website? Maybe you have some
            elements with a z-index value of 9999 or other elements that appear
            randomly in the 100-200 range.
          </p>
        </Link>
      </div>
    </div>
  );
}

export { Articles };
