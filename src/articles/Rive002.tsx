import {
  useRive,
  useViewModel,
  useViewModelInstanceColor,
  useViewModelInstanceString,
} from "@rive-app/react-webgl2";

function Rive002() {
  const { rive, RiveComponent } = useRive({
    src: "../rive-dialog.riv",
    stateMachines: "State Machine 1",
    autoBind: true,
    autoplay: true,
  });

  const dialogViewModel = useViewModel(rive, { name: "Dialog" });
  const boundInstance = rive?.viewModelInstance;

  const { setValue: setTitle } = useViewModelInstanceString(
    "title",
    boundInstance,
  );
  const { setValue: setDescription } = useViewModelInstanceString(
    "description",
    boundInstance,
  );
  const { setValue: setPrimaryButtonText } = useViewModelInstanceString(
    "primaryButton",
    boundInstance,
  );
  const { setValue: setSecondaryButtonText } = useViewModelInstanceString(
    "secondaryButton",
    boundInstance,
  );
  const { setRgb: setPrimaryButtonColor } = useViewModelInstanceColor(
    "primaryColor",
    boundInstance,
  );

  setTitle("Is this the best porfolio you've seen?");
  setDescription(
    "Take time to review as much as you can to provide the answer I'm looking for.",
  );
  setPrimaryButtonText("Absolutely");
  setSecondaryButtonText("Pretty Much");
  setPrimaryButtonColor(198, 119, 255);

  return (
    <div className="w-[500px] h-[500px]">
      <RiveComponent />
    </div>
  );
}

export { Rive002 };
