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
}

function LightningBoltGroup({ boltLevel }: Props) {
  const { rive, RiveComponent } = useRive({
    src: "../rock_meter_lightning_bolt_test.riv",
    stateMachines: "State Machine 1",
    autoBind: true,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.TopLeft,
    }),
  });

  const dialogViewModel = useViewModel(rive, { name: "ViewModel1" });
  const boundInstance = rive?.viewModelInstance;

  const { setValue: setBoltLevel } = useViewModelInstanceNumber(
    "boltLevel",
    boundInstance,
  );

  useEffect(() => {
    if (!boundInstance) return;
    console.log("sending to rive:", boltLevel); // 👈 here
    setBoltLevel(boltLevel);
  }, [boltLevel, boundInstance]);

  return (
    <div className="w-screen h-screen bg-[#1D1C20] flex justify-center items-center">
      <div className="w-[375px] h-[840px]">
        <RiveComponent className="h-full w-full" />
      </div>
    </div>
  );
}

export { LightningBoltGroup };
