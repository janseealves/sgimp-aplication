import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerOptions {
  path: string;
  icon: string;
  label: string;
  
}
 
interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void; //função para alterar a variant do Drawer
  drawerOptions: IDrawerOptions[];
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
}

type Props = {
    children? : React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {

    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<Props> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

    const toggleDrawerOpen = useCallback(()=> {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[])=> {
      setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions, toggleDrawerOpen }}>
        {children}
    </DrawerContext.Provider>
  );
};
