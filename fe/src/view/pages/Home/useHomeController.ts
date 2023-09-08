import { productsService } from '../../../app/services/productsService';
import { useHomeContext } from './components/HomeContext/useHomeContext';

export function useHomeController() {
  const {
    file, handleChangeFile, isLoading, setIsLoading, validateData, setValidateData,
  } = useHomeContext();

  async function handleValidateFile() {
    try {
      if (file) {
        setIsLoading(true);
        const response = await productsService.validateFile(file);
        setValidateData(response);
      }
    } catch {} finally {
      setIsLoading(false);
    }
  }

  return {
    file,
    isLoading,
    handleChangeFile,
    handleValidateFile,
    validateData,
  };
}
