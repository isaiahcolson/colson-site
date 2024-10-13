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
          <p className="font-bold md:text-4 mb-1">Opportunity</p>
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
          <img
            className="mb-2 w-full"
            src="/tlq-mockup-1.png"
            alt="mockup of phone verification"
          />

          <p className="text-1 md:text-2 italic text-gray-60 leading-normal text-center">
            User flow of the lead form before and after addressing this
            opportunity with highlights of some new additions.
          </p>
        </div>

        <div className="mb-8">
          <img
            className="mb-2 w-full"
            src="/tlq-mockup-2.png"
            alt="mockup of phone verification"
          />
          <p className="text-1 md:text-2 italic text-gray-60 leading-normal text-center">
            Mockups of the two steps we added to help provide resources to users
            that were just asking a question or only looking for advice.
          </p>
        </div>

        <div>
          <img
            className="mb-2 w-full"
            src="/tlq-mockup-3.png"
            alt="mockup of changes to contact step"
          />
          <p className="text-1 md:text-2 italic text-gray-60 leading-normal text-center">
            Mockups of two steps with lovability through user-generated content
            as well as pricing info for users who are deciding whether they need
            a tax pro or not. Note: these images have been changed due to
            restrictions of what I can and cannot show.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div>
          <p className="font-bold md:text-4 mb-1">Summary</p>

          <p className="md:text-4 leading-normal mb-6">
            As a business, we send people that needed tax help to a tax pro from
            the group of tax pros that we partner with. During tax season, we
            saw a significant amount of those pros leave the program. We're used
            to some amount of churn every month, but these numbers caused our
            stakeholders to get the product and marketing teams focused on
            solving this opportunity in preparation for the upcomming tax
            season.
          </p>

          <p className="md:text-4 leading-normal mb-6">
            When digging into this opportunity more, we learned from those pros
            that one of the reasons they left was due to not having the capacity
            to handle the amount of leads we sent them. As our team continued
            interviewing these pros, we learned that a lot of their capacity or
            bandwidth was being used to focus on low-quality leads–people that
            either had low intentions in working with a pro or didn't actually
            need help from a tax pro.
          </p>

          <p className="md:text-4 leading-normal mb-6">
            We were able to identify three low-quality groups: those just asking
            a question, those gathering info like pricing, and those that are
            still deciding whether they need a pro. After the initial discovery
            period, we spent the next two months running through multiple rounds
            of quick iteration to target those users and direct them to a
            solution that better met their needs or sell them on the value of
            working with one of our pros.
          </p>

          <p className="md:text-4 leading-normal mb-6">
            While this is still a work in progress, we've already redirected 10%
            of our traffic away from our pros. This does hurt our revenue
            slightly, but we've monitored success metrics that tell us we're on
            the right track. One of those metrics is qualitative feedback from
            pros that previously rated the quality of leads as a 1 out of 5,
            they're now reaching out to us to let us know that they've seen
            improvement in the last month.
          </p>

          <p className="md:text-4 leading-normal">
            The team plans to continue to cut users with low intent and low
            ability while also working to improve conversion rate to offset some
            of the loss of referrals but not all of it. With the last month
            before tax season begins, we plan to optimize our solutions by
            cleaning up our technical implementation and polishing our designs.
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row-reverse md:justify-between">
          <Link
            to="/work/phone-verification"
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
