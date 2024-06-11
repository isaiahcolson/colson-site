function MoreSection() {
  return (
    <section className="p-8 bg-gray-20 rounded-xl">
      <img
        className="mx-auto mb-3 md:w-10"
        src="/read-icon.svg"
        alt="articles icon"
      />
      <p className="text-4 font-bold md:text-5 mb-1 text-center">Want More?</p>
      <p className="md:text-4 md:text-center mb-6">
        I've written a handful of articles that have been published on
        Bootcamp–a UX publication from the team behind UX Collective.
      </p>
      <a
        className="font-bold text-white bg-blue-50 cursor-pointer px-8 py-3 rounded-xl block text-center md:text-4 md:w-fit mx-auto ease-easy duration-100 hover:bg-blue-60"
        href="https://medium.com/@isaiahcolson"
        target="_blank"
      >
        Read Now
      </a>
    </section>
  );
}

export { MoreSection };
