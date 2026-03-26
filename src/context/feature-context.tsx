import { createContext, useContext, useState, type ReactNode } from "react";

export interface FeatureContextType {
  activeFeature: string;
  setActiveFeature: (featureId: string) => void;
}

const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

export function FeatureProvider({ children }: { children: ReactNode }) {
  const [activeFeature, setActiveFeature] = useState<string>("dashboard");

  return (
    <FeatureContext.Provider value={{ activeFeature, setActiveFeature }}>
      {children}
    </FeatureContext.Provider>
  );
}

export function useFeature() {
  const context = useContext(FeatureContext);
  if (!context) {
    throw new Error("useFeature must be used within FeatureProvider");
  }
  return context;
}
