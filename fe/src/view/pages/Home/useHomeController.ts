import { useHomeContext } from './components/HomeContext/useHomeContext';

export function useHomeController() {
  const { file, handleChangeFile } = useHomeContext();

  function handleValidateFile() {
    console.log('validar aquivo');
  }

  return {
    file,
    handleChangeFile,
    handleValidateFile,
  };
}
