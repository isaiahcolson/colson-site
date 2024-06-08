import { ReactNode, useState } from "react";
import { JourneyList } from "../components/Journey";
import {
  ArchitectureSkill,
  EmptySkill,
  InteractionSkill,
  InterfaceSkill,
  ResearchSkill,
  VisualSkill,
  WritingSkill,
} from "../components/Skills";

function Home() {
  const [skill, setSkill] = useState("");

  function HandleEmptySelect(): ReactNode {
    if (skill === "") {
      return <EmptySkill className="oppacity-100" />;
    } else {
      return <EmptySkill className="opacity-0 max-h-0" />;
    }
  }

  function HandleArchitectureSelect(): ReactNode {
    if (skill === "architecture") {
      return <ArchitectureSkill className="oppacity-100" />;
    } else {
      return <ArchitectureSkill className="opacity-0 max-h-0" />;
    }
  }
  function HandleVisualSelect(): ReactNode {
    if (skill === "visual") {
      return <VisualSkill className="oppacity-100" />;
    } else {
      return <VisualSkill className="opacity-0 max-h-0" />;
    }
  }
  function HandleInterfaceSelect(): ReactNode {
    if (skill === "interface") {
      return <InterfaceSkill className="oppacity-100" />;
    } else {
      return <InterfaceSkill className="opacity-0 max-h-0" />;
    }
  }
  function HandleInteractionSelect(): ReactNode {
    if (skill === "interaction") {
      return <InteractionSkill className="oppacity-100" />;
    } else {
      return <InteractionSkill className="opacity-0 max-h-0" />;
    }
  }
  function HandleResearchSelect(): ReactNode {
    if (skill === "research") {
      return <ResearchSkill className="oppacity-100" />;
    } else {
      return <ResearchSkill className="opacity-0 max-h-0" />;
    }
  }
  function HandleWritingSelect(): ReactNode {
    if (skill === "writing") {
      return <WritingSkill className="oppacity-100" />;
    } else {
      return <WritingSkill className="opacity-0 max-h-0" />;
    }
  }

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

          <section className="mb-32">
            <p className="text-4 font-bold md:text-5 mb-12 md:mb-14 text-center">
              My Skills
            </p>
            <div className="relative w-fit mx-auto mb-16">
              <img
                className="mx-auto md:w-[360px]"
                src="/skills-hexagon.svg"
                alt="skills chart"
              />

              <button
                className="absolute -top-6 md:-top-8 left-0 right-0 text-1 md:text-2 underline ease-in-out duration-200"
                onClick={() =>
                  skill === "architecture"
                    ? setSkill("")
                    : setSkill("architecture")
                }
              >
                Architecture
              </button>
              <button
                className="absolute top-10 md:top-16 -right-8 md:-right-7 text-1 md:text-2 underline"
                onClick={() =>
                  skill === "visual" ? setSkill("") : setSkill("visual")
                }
              >
                Visual
              </button>
              <button
                className="absolute bottom-12 md:bottom-[76px] -right-12 text-1 md:text-2 underline"
                onClick={() =>
                  skill === "interface" ? setSkill("") : setSkill("interface")
                }
              >
                Interface
              </button>
              <button
                className="absolute left-0 right-0 text-1 md:text-2 underline"
                onClick={() =>
                  skill === "interaction"
                    ? setSkill("")
                    : setSkill("interaction")
                }
              >
                Interaction
              </button>
              <button
                className="absolute bottom-12 md:bottom-[76px] -left-12 text-1 md:text-2 underline"
                onClick={() =>
                  skill === "research" ? setSkill("") : setSkill("research")
                }
              >
                Research
              </button>
              <button
                className="absolute top-11 md:top-[72px] -left-9 text-1 md:text-2 underline"
                onClick={() =>
                  skill === "writing" ? setSkill("") : setSkill("writing")
                }
              >
                Writing
              </button>
            </div>

            <div>
              {HandleEmptySelect()}

              {HandleArchitectureSelect()}

              {HandleVisualSelect()}

              {HandleInterfaceSelect()}

              {HandleInteractionSelect()}

              {HandleResearchSelect()}

              {HandleWritingSelect()}
            </div>
          </section>

          <section className="mb-32">
            <p className="text-4 font-bold md:text-5 mb-6 text-center">
              My Journey
            </p>

            <JourneyList />
          </section>

          <section className="p-8 bg-gray-20 rounded-xl">
            <img
              className="mx-auto mb-3 md:w-10"
              src="/read-icon.svg"
              alt="articles icon"
            />
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
