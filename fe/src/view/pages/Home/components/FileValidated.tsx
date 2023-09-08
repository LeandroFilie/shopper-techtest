import { useHomeController } from '../useHomeController';
import { Button } from '../../../components/Button';
import { ProductRow } from './ProductRow';

export function FileValidated() {
  const {
    validateData, handleResetFile, handleUpdatePrices, isLoading,
  } = useHomeController();
  const hasRules = (validateData?.products || [])
    .map((product) => Object.values(product.rules)
      .some((rule) => rule === true)).some((rule) => rule === true);

  return (
    <>
      <div className='relative overflow-x-auto w-full'>
        <table className='w-full text-sm text-left text-gray-600'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope="col" className="px-6 py-3">Código</th>
              <th scope="col" className="px-6 py-3">Nome</th>
              <th scope="col" className="px-6 py-3">Preço Atual</th>
              <th scope="col" className="px-6 py-3">Novo Preço</th>
              <th scope="col" className="px-6 py-3">Regras</th>
            </tr>
          </thead>
          <tbody>
            {validateData?.products.map((product) => (
              <ProductRow key={product.product_code} product={product} />
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex items-center justify-end gap-4 w-full'>
        {hasRules && (
          <Button type='button' onClick={handleResetFile}>
            <p className='text-sm'>Limpar</p>
          </Button>
        )}
        <Button disabled={hasRules} onClick={handleUpdatePrices} isLoading={isLoading}>
          Atualizar Preços
        </Button>
      </div>

    </>
  );
}
