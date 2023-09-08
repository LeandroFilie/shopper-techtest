import { CheckCircledIcon } from '@radix-ui/react-icons';
import { useHomeController } from '../useHomeController';
import { Button } from '../../../components/Button';

export function SelectedFile() {
  const { file, handleValidateFile, isLoading } = useHomeController();

  return (
    <>
      <div className='flex gap-2 items-center justify-start border border-gray-200 rounded-2xl p-4'>
        <CheckCircledIcon className='w-4 h-4' />
        <p className='text-sm'>{file?.name}</p>
      </div>
      <Button
        onClick={handleValidateFile}
        disabled={!file}
        isLoading={isLoading}
      >
        Validar
      </Button>
    </>
  );
}
