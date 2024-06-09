import { Link } from "react-router-dom";

function PricingChart() {
  return (
    <div className="mx-4 my-16 max-w-2xl md:mx-auto">
      <section className="mb-12">
        <Link
          className="font-bold md:text-4 text-blue-50 flex hover:text-blue-60mb-6 mb-6"
          to="/"
        >
          <img
            className="mr-2"
            src="/chevron-left.svg"
            alt="chevron left icon"
          />
          Back Home
        </Link>

        <p className="font-bold text-6 md:text-7 mb-2">Pricing Chart</p>
        <p className="font-bold text-4 md:text-5 mb-12 text-gray-60">
          Ramsey SmartTax
        </p>

        <div className="bg-gray-30 h-[1px] w-full" />
      </section>

      <section className="mb-16">
        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Outcome</p>
          <p className="md:text-4 leading-normal">
            The offerings for each of the pricing options in the Ramsey tax
            software had changed.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Solution</p>
          <p className="md:text-4 leading-normal">
            Update the designs to better reflect the brand while showing off the
            features that are offered in each pricing tier.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Timeframe</p>
          <p className="md:text-4 leading-normal">2 months</p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Role</p>
          <p className="md:text-4 leading-normal">Research, Design</p>
        </div>

        <div>
          <p className="font-bold md:text-4 mb-1">Tools</p>
          <p className="md:text-4 leading-normal">Figma</p>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8">
          <img
            className="mb-2 w-full"
            src="/pc-mockup-1.svg"
            alt="mockup of phone verification"
          />
          <p className="text-1 md:text-2 italic text-gray-60 leading-normal text-center">
            Mockups of the three pricing tiers.
          </p>
        </div>

        <div>
          <img
            className="mb-2 w-full"
            src="/pc-mockup-2.svg"
            alt="mockup of changes to contact step"
          />
          <p className="text-1 md:text-2 italic text-gray-60 leading-normal text-center">
            Callouts showing that we're highlighting a preferred tier through
            parts of the UI, as well as providing info through tooltips.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div>
          <p className="font-bold md:text-4 mb-1">Summary</p>

          <p className="md:text-4 leading-normal mb-6">
            In between tax seasons, the business decided to change some of the
            additional offerings inside of the pricing tiers of the Ramsey tax
            filing software. With those changes, it was also necessary to update
            the designs of the pricing chart to utilize the latest branding
            assets.
          </p>

          <p className="md:text-4 leading-normal mb-6">
            One of the key things to figure out with this project was which
            pricing tier was best to highlight. We had one that was the
            cheapest, another that had our flagship product, and the third was
            somewhere in the middle. After doing various usability interviews,
            we found that a majority of the users selected the two lower priced
            offers. We opted to encourage users to go for the mid-tier price and
            thus drive higher revenue.
          </p>

          <p className="md:text-4 leading-normal">
            In this previous tax season, over 100k users have seen this pricing
            chart. The majority of users did choose the lowest option, but we
            were also able to hit a record-high revenue.
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row-reverse md:justify-between">
          <Link
            to="/"
            className="font-bold text-center md:text-4 bg-blue-50 text-white duration-100 px-8 py-3 rounded-xl hover:bg-blue-60 mb-4 md:mb-0"
          >
            Return Home
          </Link>

          <Link
            to="/work/help-center"
            className="font-bold text-center md:text-4 text-blue-50 duration-100 px-8 py-3 rounded-xl hover:bg-blue-5 hover:text-blue-60"
          >
            Previous Project
          </Link>
        </div>
      </section>
    </div>
  );
}

export { PricingChart };
