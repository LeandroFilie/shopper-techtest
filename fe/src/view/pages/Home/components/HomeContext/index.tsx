import {
  ChangeEvent, ReactNode, createContext, useState,
} from 'react';
import { ValidateDataResponse } from '../../../../../app/services/productsService/validateFile';

interface HomeContextvalue {
  file: File | null;
  handleChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  validateData: ValidateDataResponse | null;
  setValidateData: (value: ValidateDataResponse | null) => void;
}

export const HomeContext = createContext({} as HomeContextvalue);

export function HomeProvider({ children }: {children: ReactNode}) {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [validateData, setValidateData] = useState<ValidateDataResponse | null>(null);

  function handleChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const fileForm = event.target.files?.[0];
    if (fileForm) {
      setFile(fileForm);
    }
  }

  return (
    <HomeContext.Provider value={{
      file, handleChangeFile, isLoading, setIsLoading, validateData, setValidateData,
    }}
    >
      {children}
    </HomeContext.Provider>
  );
}
