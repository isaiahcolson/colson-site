import { useEffect } from "react";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useViewModel,
  useViewModelInstanceBoolean,
} from "@rive-app/react-webgl2";

function RiveFaces() {
  const { rive, RiveComponent } = useRive({
    src: "../face-rating-desktop.riv",
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

  const { setValue: setGreatHover } = useViewModelInstanceBoolean(
    "greatHover",
    boundInstance,
  );
  const { value: isGreatSelected, setValue: setGreatSelection } =
    useViewModelInstanceBoolean("greatSelected", boundInstance);
  const { setValue: setGoodHover } = useViewModelInstanceBoolean(
    "goodHover",
    boundInstance,
  );
  const { value: isGoodSelected, setValue: setGoodSelection } =
    useViewModelInstanceBoolean("goodSelected", boundInstance);
  const { setValue: setPoorHover } = useViewModelInstanceBoolean(
    "poorHover",
    boundInstance,
  );
  const { value: isPoorSelected, setValue: setPoorSelection } =
    useViewModelInstanceBoolean("poorSelected", boundInstance);
  const { setValue: setTerribleHover } = useViewModelInstanceBoolean(
    "terribleHover",
    boundInstance,
  );
  const { value: isTerribleSelected, setValue: setTerribleSelection } =
    useViewModelInstanceBoolean("terribleSelected", boundInstance);

  function returnSelection() {
    if (isGreatSelected) return "great";
    if (isGoodSelected) return "good";
    if (isPoorSelected) return "poor";
    if (isTerribleSelected) return "terrible";
    return "neutral";
  }

  console.log("selection: ", returnSelection());

  useEffect(() => {
    if (!boundInstance) return;
    setGreatHover(false);
    setGreatSelection(false);
    setGoodHover(false);
    setGoodSelection(false);
    setPoorHover(false);
    setPoorSelection(false);
    setTerribleHover(false);
    setTerribleSelection(false);
  }, [boundInstance]);

  return (
    <div className="w-screen h-screen bg-[#F5F7F8] flex justify-center items-center">
      <div className="p-12 bg-white rounded-[16px] w-[491px] border border-solid border-[#D5D9DB] h-fit">
        <p className="text-[#1F2426] font-semibold text-5 mb-2">
          Quality Sentiment
        </p>
        <p className="text-[#69757A] text-2 mb-6">
          Let us know how you feel about the quality of Art as an opportunity.
        </p>
        <div className="flex justify-center">
          <div className="w-[256px] h-[64px]">
            <RiveComponent className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { RiveFaces };
