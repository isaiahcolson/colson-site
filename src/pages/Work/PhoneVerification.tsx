import { Link } from "react-router-dom";

function PhoneVerification() {
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

        <p className="font-bold text-6 md:text-7 mb-2">Phone Verification</p>
        <p className="font-bold text-4 md:text-5 mb-12 text-gray-60">
          Ramsey SmartVestor
        </p>

        <div className="bg-gray-30 h-[1px] w-full" />
      </section>

      <section className="mb-16">
        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Outcome</p>
          <p className="md:text-4 leading-normal">
            Our team learned from our investing pros that there was a high rate
            of leads with bogus contact info.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Solution</p>
          <p className="md:text-4 leading-normal">
            Our solution was to verify the phone number of everyone submitting
            the form by using a unique 6-digit code.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Timeframe</p>
          <p className="md:text-4 leading-normal">4 months</p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Role</p>
          <p className="md:text-4 leading-normal">
            Research, Design, Product Lead
          </p>
        </div>

        <div>
          <p className="font-bold md:text-4 mb-1">Tools</p>
          <p className="md:text-4 leading-normal">Figma, Twilio, Mobbin</p>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8">
          <img
            className="mb-2 w-full"
            src="/pv-mockup-1.svg"
            alt="mockup of phone verification"
          />
          <p className="text-1 md:text-2 italic text-gray-60 leading-normal text-center">
            Mockups of the additional step and copy for phone verification.
          </p>
        </div>

        <div>
          <img
            className="mb-2 w-full"
            src="/pv-mockup-2.svg"
            alt="mockup of changes to contact step"
          />
          <p className="text-1 md:text-2 italic text-gray-60 leading-normal text-center">
            Callouts of the most significant changes–most of which impacted the
            step of the form asking for contact info.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div>
          <p className="font-bold md:text-4 mb-1">Summary</p>

          <p className="md:text-4 leading-normal mb-6">
            Implementing phone verification was somewhat straightforward. The
            biggest issue we saw as a team was that implementing this change
            resulted in a 24% drop in our conversion rate–1 of every 4 people
            didn't want to verify their info.
          </p>

          <p className="md:text-4 leading-normal mb-6">
            To address this, our team negotiated a 3 week test with our
            stakeholders. The plan was to run a new test every week that changed
            elements of the UI to increase conversion rate.
          </p>

          <p className="md:text-4 leading-normal">
            At the end of 3 weeks, we ran an A/B test on the form–the control
            didn't have phone verification, and the variant did. The result was
            an increase in conversion rate by 15%. To reiterate, we went from a
            -24% drop in conversion rate to a +15% increase.
          </p>
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
            to="/"
            className="font-bold text-center md:text-4 text-blue-50 duration-100 px-8 py-3 rounded-xl hover:bg-blue-5 hover:text-blue-60"
          >
            Return Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export { PhoneVerification };
