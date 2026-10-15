import Image from "next/image";

type ServiceHeroBackgroundProps = {
  imageSrc: string;
};

export default function ServiceHeroBackground({
  imageSrc,
}: ServiceHeroBackgroundProps) {
  return (
    <>
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#06142a]/65 sm:bg-gradient-to-r sm:from-[#06142a]/90 sm:via-[#06142a]/65 sm:to-[#06142a]/40"
      />
    </>
  );
}
