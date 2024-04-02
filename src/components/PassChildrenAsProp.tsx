type TProviderProps = {
  children: React.ReactNode; // it says me that children is a ReactNode
};

// Provider Component
export const PassChildrenAsProp = ({ children }: TProviderProps) => {
  return <>{children}</>;
};
