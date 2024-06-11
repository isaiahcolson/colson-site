interface Props {
  className: string;
}

function EmptySkill({ className }: Props) {
  return (
    <div className={`${className} overflow-hidden easy duration-400`}>
      <img className="mx-auto mb-3" src="/touch-icon.svg" alt="touch icon" />

      <p className="italic text-center text-gray-60">
        Select a skill above to learn more.
      </p>
    </div>
  );
}

function ArchitectureSkill({ className }: Props) {
  return (
    <div className={`${className} overflow-hidden easy duration-400`}>
      <p className="text-center font-bold text-gray-60 text-4 md:text-5 mb-4">
        Information Architecture
      </p>
      <div className="leading-normal">
        <p className="mb-6 md:text-4 leading-normal">
          I haven't had a lot of opportunities to build on my architecture
          design skills in the last year or so. The time that I have had,
          though, has been through web-based applications.
        </p>
        <p className="md:text-4 leading-normal">
          In my time as a software engineer, I had the opportunity to work with
          a team to stand up a new application. One of our tasks was to create a
          hierarchy of the product's infrastructure from scratch.
        </p>
      </div>
    </div>
  );
}

function VisualSkill({ className }: Props) {
  return (
    <div className={`${className} overflow-hidden easy duration-400`}>
      <p className="text-center font-bold text-gray-60 text-4 md:text-5 mb-4">
        Visual Design
      </p>
      <div className="leading-normal">
        <p className="mb-6 md:text-4 leading-normal">
          One area that I believe I excel at is through visual design. I'll be
          the first to admit that this was one of my weaker areas only a few
          years ago, but I've had a lot of opportunities to learn from some
          great designers.
        </p>
        <p className="md:text-4 leading-normal">
          Before I became a product designer, I worked at a church as the
          videographer and graphic designer. In total, I've spent over a decade
          in the creative field.
        </p>
      </div>
    </div>
  );
}

function InterfaceSkill({ className }: Props) {
  return (
    <div className={`${className} overflow-hidden easy duration-400`}>
      <p className="text-center font-bold text-gray-60 text-4 md:text-5 mb-4">
        Interface Design
      </p>
      <div className="leading-normal">
        <p className="mb-6 md:text-4 leading-normal">
          UI design is likely my favorite area of product/UX. I often find
          myself using UI elements when creating reports or presentations
          because it helps me grow and fills that desire.
        </p>
        <p className="md:text-4 leading-normal">
          I'll admit that creating and communicating a brand from scratch isn't
          a strength of mine. Once a brand is established, however, I believe
          I'm well suited to be able to design an interface that communicates
          that brand while also bringing form and function together in a great
          experience for users.
        </p>
      </div>
    </div>
  );
}

function InteractionSkill({ className }: Props) {
  return (
    <div className={`${className} overflow-hidden easy duration-400`}>
      <p className="text-center font-bold text-gray-60 text-4 md:text-5 mb-4">
        Interaction Design
      </p>
      <div className="leading-normal">
        <p className="mb-6 md:text-4 leading-normal">
          I would love to be able to say that I'm better at this area than I
          really am, but sadly I believe I still need some more practice first.
          I've had a few chances to be able to explore this area of UX through
          tools like Lottie, Rive, or custom CSS animations.
        </p>
        <p className="md:text-4 leading-normal">
          Before I became a product designer, I worked at a church as a
          videographer. One of my areas of specialty was motion graphics–I even
          had a few chances to teach others and help them grow in their craft.
        </p>
      </div>
    </div>
  );
}

function ResearchSkill({ className }: Props) {
  return (
    <div className={`${className} overflow-hidden easy duration-400`}>
      <p className="text-center font-bold text-gray-60 text-4 md:text-5 mb-4">
        Research
      </p>
      <div className="leading-normal">
        <p className="mb-6 md:text-4 leading-normal">
          In product design, research is obviously one of the most important
          elements. I've been blessed to have some great UX researchers to learn
          from in my time as a product designer. I believe that's helped me to
          excel in this area.
        </p>
        <p className="md:text-4 leading-normal">
          During my time as a product designer I've been asked to step in as the
          interim product leader while business leaders work to fill that role.
          Selfishly, this has been a great opportunity for me to grow in the
          area of research. I've been able to learn how to connect the business
          and the customer together while leading the squad to aligning with
          stakeholders.
        </p>
      </div>
    </div>
  );
}

function WritingSkill({ className }: Props) {
  return (
    <div className={`${className} overflow-hidden easy duration-400`}>
      <p className="text-center font-bold text-gray-60 text-4 md:text-5 mb-4">
        UX Writing
      </p>
      <div className="leading-normal">
        <p className="mb-6 md:text-4 leading-normal">
          Depending on how far you've made it on my site so far, you're probably
          well aware of my writing skill level. I wouldn't say that I'm
          terrible, but this is one of my weaker areas.
        </p>
        <div>
          <span className="text-3 md:text-4">
            During my time as a product designer, I've been able to work with
            some talented copy writers and editors. I've learned a few things
            from them during this time, but I could never be able to replace
            them! I have worked at writing{" "}
          </span>
          <a
            className="text-3 md:text-4 underline"
            href="https://medium.com/@isaiahcolson"
            target="_blank"
          >
            some long-form articles on Medium
          </a>
          <span className="text-3 md:text-4"> that I'm proud of, though.</span>
        </div>
      </div>
    </div>
  );
}

export {
  EmptySkill,
  ArchitectureSkill,
  VisualSkill,
  InterfaceSkill,
  InteractionSkill,
  ResearchSkill,
  WritingSkill,
};
