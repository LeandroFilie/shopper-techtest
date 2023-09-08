import { Section } from '../../components/Section';
import { HomeLayout } from '../../layouts/HomeLayout';

export function Home() {
  return (
    <HomeLayout>
      <main className='flex flex-col gap-4 items-center mt-12 w-full'>
        <Section>
          <h1 className='text-xl text-gray-900 font-medium'>Atualizar Lista de Preços</h1>
          <span className='text-sm text-gray-500'>Aqui você poderá fazer o upload de uma arquivo para atualizar os preços</span>
        </Section>
      </main>
    </HomeLayout>
  );
}
