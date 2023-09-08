import { toast } from 'react-hot-toast';
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
        toast.success('Preços atualizados com sucesso');
        handleResetFile();
      }
    } catch {} finally {
      setIsLoading(false);
    }
  }

  function buildRuleMessage(rule: string) {
    const messages: Record<string, string> = {
      missingInput: 'Produto ou preço não informados',
      priceIsNaN: 'Preço inválido',
      priceSmallerThanCost: 'Preço menor que o custo',
      priceChangeGreaterThan10Percent: 'Preço com alteração maior a 10% do preço atual',
      notExistsProduct: 'Este produto não existe',
      packComponentNotPresent: 'Componente do pack não está presente no arquivo',
      packPriceNotEqualToSumOfComponents: 'Preço do pack diferente da soma dos preços dos componentes',
    };

    return messages[rule];
  }

  return {
    file,
    handleResetFile,
    isLoading,
    handleChangeFile,
    handleValidateFile,
    validateData,
    handleUpdatePrices,
    buildRuleMessage,
  };
}
