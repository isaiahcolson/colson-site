import { Link } from "react-router-dom";

function DesignSystem() {
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

        <p className="font-bold text-6 md:text-7 mb-2">Design System</p>
        <p className="font-bold text-4 md:text-5 mb-12 text-gray-60">
          Ramsey Solutions
        </p>

        <div className="bg-gray-30 h-[1px] w-full" />
      </section>

      <section className="mb-16">
        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Outcome</p>
          <p className="md:text-4 leading-normal">
            The Design System team at Ramsey Solutions was expanding their
            library of components and needed contributions from designers.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Solution</p>
          <p className="md:text-4 leading-normal">
            I'd previously designed and used two components, an alert and a
            modal, that they were able to use.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Timeframe</p>
          <p className="md:text-4 leading-normal">2 weeks</p>
        </div>

        <div className="mb-6">
          <p className="font-bold md:text-4 mb-1">Role</p>
          <p className="md:text-4 leading-normal">
            Research, Design, Contributor
          </p>
        </div>

        <div>
          <p className="font-bold md:text-4 mb-1">Tools</p>
          <p className="md:text-4 leading-normal">Figma, Figjam, Mobbin</p>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8">
          <img
            className="mb-2 w-full"
            src="/ds-mockup-1.svg"
            alt="mockup of phone verification"
          />
          <p className="text-1 md:text-2 italic text-gray-60 leading-normal text-center">
            Examples of negative and positive alerts that I contributed to the
            company's design system.
          </p>
        </div>

        <div>
          <img
            className="mb-2 w-full"
            src="/ds-mockup-2.svg"
            alt="mockup of changes to contact step"
          />
          <p className="text-1 md:text-2 italic text-gray-60 leading-normal text-center">
            Examples of the modal/dialog box that I also contributed to the
            company's design system.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div>
          <p className="font-bold md:text-4 mb-1">Summary</p>

          <p className="md:text-4 leading-normal mb-6">
            I'm appreciative of the team that owns the design system at Ramsey
            Solutions for letting me contribute. One of the ways they start
            working on newer additions to the design system is by asking other
            product designers or engineers in the company for examples that they
            can use as a starting point.
          </p>

          <p className="md:text-4 leading-normal mb-6">
            The first time I was able to contribute designs was for an alert.
            The intention of the alert is to provide users with a system
            response, whether good or bad, following an action. For example, I'd
            designed an error alert for a lead form that would show if the
            response to the endpoint returned unsuccessful. I'd also created a
            success alert for when a user edited the lead info later on.
          </p>

          <p className="md:text-4 leading-normal mb-6">
            The second opportunity that I had to contribute was for a
            modal/dialog. The general intention of the modal was to give the
            users a piece of UI that they could interact with to respond to a
            prompt. For example, one of the examples I'd given was a dialog box
            that shows asking a user to confirm the assignment of a tax provider
            to a lead. I'd also given an example with imagery and an example of
            a "dangerous" dialog.
          </p>

          <p className="md:text-4 leading-normal">
            There were some minor tweaks that the team made to each of the
            designs that I'd given, but they were able to use most of what I'd
            provided. There are now millions of people that are able to see and
            use the components that I had a small part of building.
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row-reverse md:justify-between">
          <Link
            to="/work/help-center"
            className="font-bold text-center md:text-4 bg-blue-50 text-white duration-100 px-8 py-3 rounded-xl hover:bg-blue-60 mb-4 md:mb-0"
          >
            Next Project
          </Link>

          <Link
            to="/work/phone-verification"
            className="font-bold text-center md:text-4 text-blue-50 duration-100 px-8 py-3 rounded-xl hover:bg-blue-5 hover:text-blue-60"
          >
            Previous Project
          </Link>
        </div>
      </section>
    </div>
  );
}

export { DesignSystem };
