interface Props {
  date: string;
  imgPath: string;
  text: string;
}

function JourneyItem({ date, imgPath, text }: Props) {
  return (
    <div className="flex items-start gap-2 md:gap-4">
      <img className="md:w-10 md:h-[50px]" src={imgPath} />

      <div>
        <p className="font-bold text-1 md:text-2 text-gray-60 mb-1">{date}</p>
        <p className="md:text-4">{text}</p>
      </div>
    </div>
  );
}

export { JourneyItem };
