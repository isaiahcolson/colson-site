import {
  JourneySection,
  MoreSection,
  SkillsSection,
} from "../components/Sections";

function Home() {
  return (
    <>
      <div className="px-4 md:px-8 my-16 md:my-24 lg:my-32">
        <div className="max-w-2xl mx-auto">
          <section className="mb-32">
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

          <SkillsSection />

          <JourneySection />

          <MoreSection />
        </div>
      </div>
    </>
  );
}

export { Home };
