import { CheckCircledIcon } from '@radix-ui/react-icons';
import { formatCurrency } from '../../../../app/utils/formatCurrency';
import { useHomeController } from '../useHomeController';
import { Button } from '../../../components/Button';

export function FileValidated() {
  const { validateData } = useHomeController();
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
                <td className="px-6 py-3">{product.product_code}</td>
                <td className="px-6 py-3">nome do produto</td>
                <td className="px-6 py-3">preço atual</td>
                <td className="px-6 py-3">{product.new_price && formatCurrency(product.new_price)}</td>
                <td className="px-6 py-3">
                  {product.message.length === 0 && (
                  <p><CheckCircledIcon /></p>
                  )}

                  {product.message.length > 0 && (
                    product.message.map((text) => (
                      <p className='first-letter:capitalize'>{text}</p>
                    ))
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button>
        Atualizar Preços
      </Button>
    </>
  );
}
