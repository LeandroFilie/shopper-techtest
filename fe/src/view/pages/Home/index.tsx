import { UploadIcon } from '@radix-ui/react-icons';
import { Section } from '../../components/Section';
import { Separator } from '../../components/Separator';
import { HomeLayout } from '../../layouts/HomeLayout';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <HomeLayout>
      <main className='flex flex-col gap-4 items-center mt-12 w-full'>
        <Section>
          <h1 className='text-xl text-gray-900 font-medium'>Atualizar Lista de Preços</h1>
          <span className='text-sm text-gray-500'>Aqui você poderá fazer o upload de uma arquivo para atualizar os preços</span>
        </Section>

        <Section className='flex flex-col gap-4 items-stretch'>
          <div className='flex flex-col gap-4 items-center justify-center border border-gray-200 rounded-2xl p-4'>
            <p className='font-medium'>Arraste e solte o arquivo aqui</p>
            <div className='flex gap-5 items-center'>
              <Separator />
              <span className='text-gray-400 text-sm'>ou</span>
              <Separator />
            </div>
            <Button>
              <UploadIcon className='w-3 h-3' />
              <p className='text-sm'>Adicionar Arquivo</p>
            </Button>
            <span className='text-gray-400 text-sm'>.csv</span>
          </div>

          <Button>Validar</Button>
        </Section>
      </main>
    </HomeLayout>
  );
}
