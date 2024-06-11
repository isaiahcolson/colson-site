import { ExampleItem } from "./ExampleItem";

function ExampleList() {
  return (
    <>
      <ExampleItem
        className="mb-4"
        description="Reduced rate of leads with bogus contact info while also
                improving conversion rate."
        imgAlt="phone verification mockup"
        imgSrc="/work-phone-verification.png"
        route="/work/phone-verification"
        size="large"
        title="Phone Verification"
      />
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <ExampleItem
          description="Contributed designs for various components to help build global design system."
          imgAlt="design system mockup"
          imgSrc="/work-design-system.svg"
          route="/work/design-system"
          size="small"
          title="Design System"
        />
        <ExampleItem
          description="Redesigned tax software help center to add option for users to connect with a tax pro."
          imgAlt="help center mockup"
          imgSrc="/work-help-center.svg"
          route="/work/help-center"
          size="small"
          title="Help Center"
        />
      </div>
      <ExampleItem
        description="Redesigned pricing chart for tax product to better communicate brand and ideal product choice."
        imgAlt="pricing chart mockup"
        imgSrc="/work-price-chart.png"
        route="/work/pricing-chart"
        size="large"
        title="Pricing Chart"
      />
    </>
  );
}

export { ExampleList };
