import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { FEATURES } from "@/constant/feature-constant";

interface MenuSectionProps {
  activeFeature: string;
  setActiveFeature: (featureId: string) => void;
}

const MenuSection = ({ activeFeature, setActiveFeature }: MenuSectionProps) => {
  return (
    <Menubar>
      <MenubarMenu>
        {FEATURES.map((feature) => {
          const IconComponent = feature.icon;
          const isActive = activeFeature === feature.id;

          return (
            <MenubarTrigger
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={isActive ? "bg-muted" : ""}
            >
              <div className="flex items-center gap-2">
                <IconComponent size={15} />
                {feature.label}
              </div>
            </MenubarTrigger>
          );
        })}
      </MenubarMenu>
    </Menubar>
  );
};

export default MenuSection;
