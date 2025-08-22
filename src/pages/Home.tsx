import { JourneySection, SkillsToolsSection } from "../components/Sections";
import { ExampleList } from "../components/Work/ExampleList";

function Home() {
  return (
    <div className="px-4 md:px-8 py-16 md:py-24 lg:py-32">
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

        <section className="mb-32">
          <p
            className="text-4 font-bold md:text-5 mb-6 text-center"
            id="workSection"
          >
            My Work
          </p>

          <ExampleList />
        </section>

        <JourneySection />

        <SkillsToolsSection />
      </div>
    </div>
  );
}

export { Home };
