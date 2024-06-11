import { Link } from "react-router-dom";

interface Props {
  description: string;
  imgAlt: string;
  imgSrc: string;
  route: string;
  size: "small" | "large";
  title: string;
  className?: string;
}

function ExampleItem({
  className,
  description,
  imgAlt,
  imgSrc,
  route,
  size,
  title,
}: Props) {
  return (
    <Link
      className={`bg-blue-5 block p-8 rounded-[32px] shadow-sm hover:shadow-md duration-150 ${
        size === "large" && "md:flex md:items-center"
      } ${className}`}
      to={route}
    >
      <img
        className={`mb-8 mx-auto ${
          size === "large" ? "max-h-60 md:mb-0" : "max-h-40"
        }`}
        src={imgSrc}
        alt={imgAlt}
      />

      <div>
        <p className="font-bold md:text-4 text-center mb-2">{title}</p>

        <p className="md:text-4 text-center mb-8">{description}</p>

        <p className="font-bold md:text-4 text-blue-50 duration-100 px-8 py-3 rounded-xl hover:bg-blue-10 hover:text-blue-60 w-fit mx-auto">
          Learn More
        </p>
      </div>
    </Link>
  );
}

export { ExampleItem };
