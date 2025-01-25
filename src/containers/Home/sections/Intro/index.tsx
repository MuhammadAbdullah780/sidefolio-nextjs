import Image from "next/image";

//
import TextFlip from "@/components/common/TextFlip";

//
import { homePageData } from "@/data/homePage";

const IntroSection = () => {
  const { imageSrc, userName, jobTitles } = homePageData;

  return (
    <section className="flex items-center gap-x-3">
      <div className="shrink-0">
        <Image
          alt={userName || "#"}
          className="shrink-0 rounded-full"
          src={imageSrc}
          width={64}
          height={64}
        />
      </div>

      <div className="grow">
        <h1 className="heading-1">{userName}</h1>
        <TextFlip words={jobTitles} />
      </div>
    </section>
  );
};

export default IntroSection;
