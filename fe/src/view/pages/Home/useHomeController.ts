import { productsService } from '../../../app/services/productsService';
import { useHomeContext } from './components/HomeContext/useHomeContext';

export function useHomeController() {
  const {
    file, setFile, handleChangeFile, isLoading, setIsLoading, validateData, setValidateData,
  } = useHomeContext();

  function handleResetFile() {
    setFile(null);
    setValidateData(null);
  }

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

  async function handleUpdatePrices() {
    try {
      if (validateData) {
        setIsLoading(true);
        await productsService.updatePrices(validateData);
        handleResetFile();
      }
    } catch {} finally {
      setIsLoading(false);
    }
  }

  return {
    file,
    handleResetFile,
    isLoading,
    handleChangeFile,
    handleValidateFile,
    validateData,
    handleUpdatePrices,
  };
}
