import {
  ChangeEvent, ReactNode, createContext, useState,
} from 'react';

interface HomeContextvalue {
  file: File | null;
  handleChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const HomeContext = createContext({} as HomeContextvalue);

export function HomeProvider({ children }: {children: ReactNode}) {
  const [file, setFile] = useState<File | null>(null);

  function handleChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const fileForm = event.target.files?.[0];
    if (fileForm) {
      setFile(fileForm);
    }
  }

  return (
    <HomeContext.Provider value={{ file, handleChangeFile }}>
      {children}
    </HomeContext.Provider>
  );
}
