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

  setTitle("Delete file?");
  setDescription("This action cannot be undone.");
  setPrimaryButtonText("Do It");
  setSecondaryButtonText("Cancel");
  setPrimaryButtonColor(220, 34, 31);

  return (
    <div className="w-[500px] h-[500px]">
      <RiveComponent />
    </div>
  );
}

export { Rive002 };
