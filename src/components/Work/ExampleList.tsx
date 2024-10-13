import { ExampleItem } from "./ExampleItem";

function ExampleList() {
  return (
    <>
      <ExampleItem
        className="mb-4"
        description="Improved quality of leads going to tax pros by redirecting users that are non-target market."
        imgAlt="tax lead quality mockup"
        imgSrc="/work-tax-lead-quality.png"
        route="/work/tax-lead-quality"
        size="large"
        title="Tax Lead Quality"
      />

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mb-4">
        <ExampleItem
          description="Reduced rate of leads with bogus contact info while also
                improving conversion rate."
          imgAlt="phone verification mockup"
          imgSrc="/work-phone-verification.png"
          route="/work/phone-verification"
          size="small"
          title="Phone Verification"
        />
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
        <ExampleItem
          description="Redesigned pricing chart for tax-filing software to highlight recommendedation."
          imgAlt="pricing chart mockup"
          imgSrc="/work-price-chart.png"
          route="/work/pricing-chart"
          size="small"
          title="Pricing Chart"
        />
      </div>
    </>
  );
}

export { ExampleList };
