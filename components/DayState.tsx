import Image from "next/image";

function DayState({ day }: { day: boolean | undefined }) {
  let image: [string, string, number?] = [
    "/images/undefined.svg",
    "gray mark",
    12,
  ];
  if (day === true) image = ["/images/checked.svg", "green check", 24];
  if (day === false) image = ["/images/false.svg", "red mark", 24];

  const [src, alt, size] = image;

  return (
    <div className="flex items-center justify-center h-9">
      <Image src={src} alt={alt} width={size} height={size} />
    </div>
  );
}

export default DayState;
