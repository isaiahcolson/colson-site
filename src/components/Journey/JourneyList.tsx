import { JourneyItem } from "./JourneyItem";

function JourneyList() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 relative">
      <JourneyItem
        date="DEC 2023"
        imgPath="/expand.svg"
        text="Took on additional responsibilities as interim product leader"
      />
      <JourneyItem
        date="JUL 2023"
        imgPath="/design.svg"
        text="Moved into a full-time Product Design role"
      />
      <JourneyItem
        date="FEB 2023"
        imgPath="/move.svg"
        text="Began the process of moving toward a full-time Product Design role"
      />
      <JourneyItem
        date="SEPT 2022"
        imgPath="/hybrid.svg"
        text="Moved to a hybrid role as a UX engineer"
      />
      <JourneyItem
        date="APR 2022"
        imgPath="/promotion.svg"
        text="Promoted to Software Engineer 2"
      />
      <JourneyItem
        date="OCT 2020"
        imgPath="/ramsey.svg"
        text="Joined Ramsey Solutions as a Software Engineer"
      />
      <JourneyItem
        date="AUG 2020"
        imgPath="/engineer.svg"
        text="Graduated software engineering bootcamp"
      />
      <JourneyItem
        date="APR 2020"
        imgPath="/bootcamp.svg"
        text="Began software engineering bootcamp"
      />
      <JourneyItem
        date="JAN 2020"
        imgPath="/learn.svg"
        text="Explored software engineering through self-taught programs"
      />
      <JourneyItem
        date="SEPT 2018"
        imgPath="/heart.svg"
        text="Married my beautiful wife–which is definitely worth mentioning"
      />
      <JourneyItem
        date="NOV 2017"
        imgPath="/camera.svg"
        text="Took on additional responsibilities as graphic designer and photographer"
      />
      <JourneyItem
        date="FEB 2016"
        imgPath="/briefcase.svg"
        text="Joined Christian Life Center Church as a Video Production Director"
      />
      <JourneyItem
        date="MAY 2015"
        imgPath="/graduate.svg"
        text="Graduated college with an Associate's degree for digital media animation & design"
      />

      <div className="w-1 bg-gray-30 h-92 absolute -z-10 left-[14px] md:left-[18px] top-6" />
    </div>
  );
}

export { JourneyList };
