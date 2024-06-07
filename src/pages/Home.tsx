import { JourneyList } from "../components/Journey";

function Home() {
  return (
    <>
      <div className="px-4 md:px-8 my-16 md:my-24 lg:my-32">
        <div className="max-w-2xl mx-auto">
          <section className="mb-24">
            <div className="text-6 font-bold leading-tight mb-2 md:text-7">
              <span>Isaiah Colson–</span>
              <span className="text-gray-60">
                Product Designer at Ramsey Solutions
              </span>
            </div>

            <p className="md:text-4">
              I'm currently creating digital experiences that connect investing
              and tax professionals with great fans.
            </p>
          </section>

          <section className="mb-24">
            <p className="text-4 font-bold md:text-5 mb-6 text-center">
              My Journey
            </p>

            <JourneyList />
          </section>

          <section className="p-8 bg-gray-20 rounded-xl">
            <img className="mx-auto mb-3 md:w-10" src="/read-icon.svg" />
            <p className="text-4 font-bold md:text-5 mb-1 text-center">
              Want More?
            </p>
            <p className="md:text-4 md:text-center mb-6">
              I've written a handful of articles that have been published on
              Bootcamp–a UX publication from the team behind UX Collective.
            </p>
            <a
              className="font-bold text-blue-50 cursor-pointer border-4 px-8 py-3 rounded-xl block text-center md:text-4 md:w-fit mx-auto hover:bg-blue-5010"
              href="https://medium.com/@isaiahcolson"
              target="_blank"
            >
              Read Now
            </a>
          </section>
        </div>
      </div>
    </>
  );
}

export { Home };
