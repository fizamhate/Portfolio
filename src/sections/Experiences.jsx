import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section id ="experiences">
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
    </section>
  );
};

export default Experiences;