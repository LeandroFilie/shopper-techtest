import { CheckCircledIcon } from '@radix-ui/react-icons';
import { useHomeController } from '../useHomeController';

export function SelectedFile() {
  const { file } = useHomeController();

  return (
    <div className='flex gap-2 items-center justify-start border border-gray-200 rounded-2xl p-4'>
      <CheckCircledIcon className='w-4 h-4' />
      <p className='text-sm'>{file?.name}</p>
    </div>
  );
}
