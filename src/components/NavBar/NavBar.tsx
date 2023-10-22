import { Link } from "react-router-dom";
import { ICLogo } from "../Icons";

function NavBar() {
  return (
    <div className="py-6 md:py-6 flex justify-between items-center p-6 max-w-7xl w-full my-0 mx-auto">
      <Link aria-label="Home" to="/">
        <ICLogo className="w-auto h-[18px] md:h-6" />
      </Link>

      {/* <Link
        className="text-lg md:text-xl hover:underline leading-[1rem]"
        to="/articles"
      >
        Articles
      </Link> */}
    </div>
  );
}

export { NavBar };
