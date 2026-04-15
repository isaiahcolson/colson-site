import { useEffect } from "react";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useViewModel,
  useViewModelInstanceNumber,
} from "@rive-app/react-webgl2";

interface Props {
  boltLevel: number;
  rockLevel: number;
}

function RockMeterRiveComponent({ boltLevel, rockLevel }: Props) {
  const { rive, RiveComponent } = useRive({
    src: "../rock_meter.riv",
    stateMachines: "State Machine 1",
    autoBind: true,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.TopLeft,
    }),
  });

  const dialogViewModel = useViewModel(rive, { name: "Main" });
  const boundInstance = rive?.viewModelInstance;

  const { setValue: setBoltLevel } = useViewModelInstanceNumber(
    "boltLevel",
    boundInstance,
  );
  const { setValue: setRockLevel } = useViewModelInstanceNumber(
    "rockLevel",
    boundInstance,
  );

  useEffect(() => {
    if (!boundInstance) return;
    console.log("bolt level:", boltLevel); // 👈 here
    console.log("rock level:", rockLevel); // 👈 here
    setBoltLevel(boltLevel);
    setRockLevel(rockLevel);
  }, [boltLevel, boundInstance, rockLevel]);

  return (
    <div className="w-screen h-screen bg-[#1D1C20] flex justify-center items-center">
      <div className="w-[375px] h-[640px]">
        <RiveComponent className="h-full w-full" />
      </div>
    </div>
  );
}

export { RockMeterRiveComponent };
