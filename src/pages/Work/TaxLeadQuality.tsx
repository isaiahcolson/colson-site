import { Link } from "react-router-dom";

function TaxLeadQuality() {
  return (
    <div className="mx-4 my-16 max-w-2xl md:mx-auto">
      <section className="mb-12">
        <Link
          className="font-bold md:text-4 text-blue-50 flex hover:text-blue-60mb-6 mb-6"
          to="/#workSection"
        >
          <img
            className="mr-2"
            src="/chevron-left.svg"
            alt="chevron left icon"
          />
          Back Home
        </Link>

        <p className="font-bold text-6 md:text-7 mb-2">Tax Lead Quality</p>
        <p className="font-bold text-4 md:text-5 mb-12 text-gray-60">
          RamseyTrusted Tax
        </p>

        <div className="bg-gray-30 h-[1px] w-full" />
      </section>

      <section className="mb-16">
        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Outcome</p>
          <p className="md:text-4 leading-normal">
            Our team learned from our tax pros that they're receiving too many
            leads during tax season, many of which the pros considered as low
            quality.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Solution</p>
          <p className="md:text-4 leading-normal">
            One way to help them manage the leads that we send them was to cut
            the users that are non-target market by offering them solutions
            through our articles or tax-filing software.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Timeframe</p>
          <p className="md:text-4 leading-normal">4 months</p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Role</p>
          <p className="md:text-4 leading-normal">
            Research, Design, Prototyping, User Testing
          </p>
        </div>

        <div>
          <p className="font-bold md:text-4 mb-1">Tools</p>
          <p className="md:text-4 leading-normal">
            Figma, UserTesting.com, React, Firebase
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8">
          <p className="text-1 md:text-2 italic text-gray-60 leading-normal text-center">
            Images coming soon.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div>
          <p className="font-bold md:text-4 mb-1">Summary</p>

          <p className="md:text-4 leading-normal mb-6">Summary coming soon.</p>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row-reverse md:justify-between">
          <Link
            to="/work/design-system"
            className="font-bold text-center md:text-4 bg-blue-50 text-white duration-100 px-8 py-3 rounded-xl hover:bg-blue-60 mb-4 md:mb-0"
          >
            Next Project
          </Link>

          <Link
            to="/#workSection"
            className="font-bold text-center md:text-4 text-blue-50 duration-100 px-8 py-3 rounded-xl hover:bg-blue-5 hover:text-blue-60"
          >
            Return Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export { TaxLeadQuality };
