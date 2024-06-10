import { Link } from "react-router-dom";

function HelpCenter() {
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

        <p className="font-bold text-6 md:text-7 mb-2">Help Center</p>
        <p className="font-bold text-4 md:text-5 mb-12 text-gray-60">
          Ramsey SmartTax
        </p>

        <div className="bg-gray-30 h-[1px] w-full" />
      </section>

      <section className="mb-16">
        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Outcome</p>
          <p className="md:text-4 leading-normal">
            The customer service team behind the Ramsey SmartTax product had
            been getting a lot of tickets and requests for professional help
            with filing their taxes.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Solution</p>
          <p className="md:text-4 leading-normal">
            Connect customers who need professional tax filing help with the
            Ramsey tax provider program.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Timeframe</p>
          <p className="md:text-4 leading-normal">1 month</p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Role</p>
          <p className="md:text-4 leading-normal">Design</p>
        </div>

        <div>
          <p className="font-bold md:text-4 mb-1">Tools</p>
          <p className="md:text-4 leading-normal">Figma, UserTesting.com</p>
        </div>
      </section>

      <section className="mb-16">
        <div>
          <img
            className="mb-2 w-full"
            src="/hc-mockup-1.png"
            alt="mockup of changes to contact step"
          />
          <p className="text-1 md:text-2 italic text-gray-60 leading-normal text-center">
            Callouts of the levels of help and the addition of connecting with a
            tax professional.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div>
          <p className="font-bold md:text-4 mb-1">Summary</p>

          <p className="md:text-4 leading-normal mb-6">
            The team had been hearing that there were requests for professional
            tax help coming from inside the Ramsey tax filing software. This
            wasn't a very common occurrence, but had happened enough that they
            were manually connecting users to one of the tax providers that we
            have in our nationwide CPA program.
          </p>

          <p className="md:text-4 leading-normal mb-6">
            The first step here was to update the designs to better reflect our
            brand. We utilize a third party to develop the software, but we own
            the look, tone, and feel. Once we had a clean slate, I was able to
            add an additional option onto the help center feature that'd allow
            users to connect with a tax professional.
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row-reverse md:justify-between">
          <Link
            to="/work/pricing-chart"
            className="font-bold text-center md:text-4 bg-blue-50 text-white duration-100 px-8 py-3 rounded-xl hover:bg-blue-60 mb-4 md:mb-0"
          >
            Next Project
          </Link>

          <Link
            to="/work/design-system"
            className="font-bold text-center md:text-4 text-blue-50 duration-100 px-8 py-3 rounded-xl hover:bg-blue-5 hover:text-blue-60"
          >
            Previous Project
          </Link>
        </div>
      </section>
    </div>
  );
}

export { HelpCenter };
