import { useEffect, useRef } from "react";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useViewModel,
  useViewModelInstanceBoolean,
  useViewModelInstanceNumber,
  useViewModelInstanceTrigger,
} from "@rive-app/react-webgl2";

interface Props {
  boltLevel: number;
  rockLevel: number;
  onThresholdChange: (value: number) => void;
  rockMeterInitated: boolean;
  transitionTick: number;
}

function RockMeterRiveComponent({
  boltLevel,
  rockLevel,
  onThresholdChange,
  rockMeterInitated,
  transitionTick,
}: Props) {
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
  const { value: thresholdValue } = useViewModelInstanceNumber(
    "threshold",
    boundInstance,
  );
  const { setValue: setRockMeterInitatedValue } = useViewModelInstanceBoolean(
    "rockMeterInitiated",
    boundInstance,
  );

  const { trigger } = useViewModelInstanceTrigger(
    "channelChange",
    boundInstance,
  );

  useEffect(() => {
    if (thresholdValue == null) return;
    onThresholdChange(thresholdValue);
  }, [thresholdValue, onThresholdChange]);

  useEffect(() => {
    if (!boundInstance) return;
    setBoltLevel(boltLevel);
    setRockLevel(rockLevel);
    setRockMeterInitatedValue(rockMeterInitated);
  }, [
    boltLevel,
    rockLevel,
    rockMeterInitated,
    boundInstance,
    setBoltLevel,
    setRockLevel,
    setRockMeterInitatedValue,
  ]);

  useEffect(() => {
    if (!trigger) return;
    if (!transitionTick) return; // optional extra guard
    trigger();
  }, [transitionTick, trigger]);

  return (
    <div className="w-screen h-screen bg-[#1D1C20] flex justify-center items-center">
      <div className="w-[375px] h-[640px]">
        <RiveComponent className="h-full w-full" />
      </div>
    </div>
  );
}

export { RockMeterRiveComponent };
