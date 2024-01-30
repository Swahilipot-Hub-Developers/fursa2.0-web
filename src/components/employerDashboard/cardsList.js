import SkillNum from "./cards/skillCard";
import StatCard from "./cards/statCard";

const CardsList = () => {
  return (
    <div className="row row-md-cols-3 gap-2 gap-md-3 mt-3 pb-5 mb-5">
      <div className="shadow col-md-3 p-0">
        <SkillNum />
      </div>
      <div className="shadow col-md-3 p-0">
        <StatCard />
      </div>
    </div>
  );
};

export default CardsList;
