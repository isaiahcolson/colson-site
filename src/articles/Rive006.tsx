import { Fit, Alignment, useRive, Layout } from "@rive-app/react-webgl2";

function Rive006() {
  const { RiveComponent } = useRive({
    src: "../connect-tag.riv",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.TopLeft,
    }),
  });

  return (
    <div className="flex gap-4">
      <div className="p-8 bg-white w-[320px] rounded-lg">
        <p className="text-black mb-2">Marty McFly</p>
      </div>
      <div className="p-8 bg-white w-[320px] rounded-lg">
        <p className="text-black mb-2">Marty McFly</p>
        <div className="w-[207px] h-[38px]">
          <RiveComponent />
        </div>
      </div>
    </div>
  );
}

export { Rive006 };
