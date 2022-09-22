import React from "react";

function AnimatedTypography() {
  async function delay(duration: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }

  const typeDownMovement = [
    { transform: "translateY(0)", opacity: 1, filter: "blur(0)" },
    { transform: "translateY(150%)", opacity: 0, filter: "blur(2px)" },
  ];

  const typeUpMovement = [
    { transform: "translateY(150%)", opacity: 0, filter: "blur(2px)" },
    { transform: "translateY(0)", opacity: 1, filter: "blur(0)" },
  ];

  function typeAnim(element: string, direction: string) {
    const elementRef = document.getElementById(element);

    if (!elementRef) {
      return;
    }

    const anim = elementRef.animate(
      direction === "up" ? typeUpMovement : typeDownMovement,
      {
        duration: 150,
        easing: "cubic-bezier(0, 0.8, 0.6, 1)",
        fill: "forwards",
      }
    );

    return anim.play();
  }

  (async () => {
    while (true) {
      await delay(200);
      typeAnim("title1", "up");
      await delay(2000);
      typeAnim("title1", "down");
      await delay(200);
      typeAnim("title2", "up");
      await delay(2000);
      typeAnim("title2", "down");
      await delay(200);
      typeAnim("title3", "up");
      await delay(2000);
      typeAnim("title3", "down");
      await delay(200);
      typeAnim("title4", "up");
      await delay(2000);
      typeAnim("title4", "down");
    }
  })();

  return (
    <div className="w-full flex justify-center">
      <p
        className="text-4xl font-bold md:text-5xl absolute opacity-0"
        id="title1"
      >
        Software Engineer
      </p>
      <p
        className="text-4xl font-bold md:text-5xl absolute opacity-0"
        id="title2"
      >
        Animator
      </p>
      <p
        className="text-4xl font-bold md:text-5xl absolute opacity-0"
        id="title3"
      >
        Entrepreneur
      </p>
      <p
        className="text-4xl font-bold md:text-5xl absolute opacity-0"
        id="title4"
      >
        Motion Designer
      </p>
    </div>
  );
}

export { AnimatedTypography };
