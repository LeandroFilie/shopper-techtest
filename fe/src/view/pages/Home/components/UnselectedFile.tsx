import { useRef } from 'react';
import { UploadIcon } from '@radix-ui/react-icons';
import { useHomeController } from '../useHomeController';
import { Separator } from '../../../components/Separator';
import { Button } from '../../../components/Button';

export function UnselectedFile() {
  const {
    handleChangeFile, handleValidateFile, file, isLoading,
  } = useHomeController();
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <label htmlFor="file" className='w-full'>
        <input
          type="file"
          accept='.csv'
          className='hidden'
          id='file'
          ref={fileInputRef}
          onChange={handleChangeFile}
        />
        <div className='flex flex-col gap-4 items-center justify-center border border-gray-200 rounded-2xl p-4'>
          <p className='font-medium'>Arraste e solte o arquivo aqui</p>
          <div className='flex gap-5 items-center'>
            <Separator />
            <span className='text-gray-400 text-sm'>ou</span>
            <Separator />
          </div>
          <Button type='button' onClick={() => fileInputRef.current?.click()}>
            <UploadIcon className='w-3 h-3' />
            <p className='text-sm'>Adicionar Arquivo</p>
          </Button>
          <span className='text-gray-400 text-sm'>.csv</span>
        </div>
      </label>
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
