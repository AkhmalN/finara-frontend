import { useFeature } from "@/context/feature-context";
import DashboardView from "@/features/dashboard/views/dashboard-view";

const FeatureSection = () => {
  const { activeFeature } = useFeature();

  return (
    <div className="my-5">
      {activeFeature === "dashboard" && <DashboardView />}
    </div>
  );
};

export default FeatureSection;
