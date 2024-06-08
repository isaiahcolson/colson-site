import { JourneyList } from "../Journey";

function JourneySection() {
  return (
    <section className="mb-32">
      <p className="text-4 font-bold md:text-5 mb-6 text-center">My Journey</p>

      <JourneyList />
    </section>
  );
}

export { JourneySection };
