import { ReactNode, useState } from "react";
import {
  ArchitectureSkill,
  EmptySkill,
  InteractionSkill,
  InterfaceSkill,
  ResearchSkill,
  VisualSkill,
  WritingSkill,
} from "../Skills";

function SkillsSection() {
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
          className={`absolute -top-6 md:-top-8 left-0 right-0 text-1 md:text-2 underline ${
            skill === "architecture" && "no-underline"
          }`}
          onClick={() =>
            skill === "architecture" ? setSkill("") : setSkill("architecture")
          }
        >
          Architecture
        </button>
        <button
          className={`absolute top-10 md:top-16 -right-8 md:-right-7 text-1 md:text-2 underline ${
            skill === "visual" && "no-underline"
          }`}
          onClick={() =>
            skill === "visual" ? setSkill("") : setSkill("visual")
          }
        >
          Visual
        </button>
        <button
          className={`absolute bottom-12 md:bottom-[76px] -right-12 text-1 md:text-2 underline ${
            skill === "interface" && "no-underline"
          }`}
          onClick={() =>
            skill === "interface" ? setSkill("") : setSkill("interface")
          }
        >
          Interface
        </button>
        <button
          className={`absolute left-0 right-0 text-1 md:text-2 underline ${
            skill === "interaction" && "no-underline"
          }`}
          onClick={() =>
            skill === "interaction" ? setSkill("") : setSkill("interaction")
          }
        >
          Interaction
        </button>
        <button
          className={`absolute bottom-12 md:bottom-[76px] -left-12 text-1 md:text-2 underline ${
            skill === "research" && "no-underline"
          }`}
          onClick={() =>
            skill === "research" ? setSkill("") : setSkill("research")
          }
        >
          Research
        </button>
        <button
          className={`absolute top-11 md:top-[72px] -left-9 text-1 md:text-2 underline ${
            skill === "writing" && "no-underline"
          }`}
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
  );
}

export { SkillsSection };
