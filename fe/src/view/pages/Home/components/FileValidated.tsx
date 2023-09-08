import { CheckCircledIcon } from '@radix-ui/react-icons';
import { formatCurrency } from '../../../../app/utils/formatCurrency';
import { useHomeController } from '../useHomeController';
import { Button } from '../../../components/Button';

export function FileValidated() {
  const {
    validateData, handleResetFile, handleUpdatePrices, isLoading,
  } = useHomeController();
  const hasMessage = validateData?.products.some((product) => product.message.length > 0);

  return (
    <>
      <div className='relative overflow-x-auto'>
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
              <tr key={product.product_code} className='bg-white border-b '>
                <td className="px-6 py-3">{product.product_code || '-' }</td>
                <td className="px-6 py-3">{product.name || '-' }</td>
                <td className="px-6 py-3">{product.sales_price ? formatCurrency(product.sales_price) : '-' }</td>
                <td className="px-6 py-3">{product.new_price ? formatCurrency(product.new_price) : '-'}</td>
                <td className="px-6 py-3">
                  {product.message.length === 0 && (
                  <p><CheckCircledIcon /></p>
                  )}

                  {product.message.length > 0 && (
                    product.message.map((text) => (
                      <p className='first-letter:capitalize' key={text}>{text}</p>
                    ))
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex items-center justify-between w-full'>
        {hasMessage && (
          <Button type='button' onClick={handleResetFile}>
            <p className='text-sm'>Limpar</p>
          </Button>
        )}
        <Button disabled={hasMessage} onClick={handleUpdatePrices} isLoading={isLoading}>
          Atualizar Preços
        </Button>
      </div>

    </>
  );
}
