import { createContext, useContext, useState } from 'react';

type NavigationContextType = {
  currentPage: string;
  navigate: (page: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState("setup");

  const navigate = (page: string) => setCurrentPage(page);

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error("Context Error");
  return context;
};