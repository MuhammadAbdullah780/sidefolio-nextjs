import { PORTFOLIO_APP_DATA } from "@/data/appData";
import MilestoneCard from "../../MilestoneCard";
import { homePageData } from "@/data/homePage";

const EducationSection = () => {
  const { education: educationMapper } = PORTFOLIO_APP_DATA.home;
  const {
    sections: {
      education: { sectionTitle, history },
    },
  } = homePageData;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="section-heading">{sectionTitle}</h2>

      <>
        {history?.map((item, i) => {
          return (
            <MilestoneCard
              key={i}
              title={item.title}
              dateRangeStr={item.timeline}
              imageUrl={item.imageUrl}
              subTitle={item.subTitle}
              description={item.description}
            />
          );
        })}
      </>
    </section>
  );
};

export default EducationSection;
