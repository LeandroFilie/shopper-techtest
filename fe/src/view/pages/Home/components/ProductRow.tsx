import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Product } from '../../../../app/types/Product';
import { formatCurrency } from '../../../../app/utils/formatCurrency';
import { ProductRules } from '../../../../app/types/ProductRules';
import { useHomeController } from '../useHomeController';

export function ProductRow({ product }: {product: Product}) {
  const { buildRuleMessage } = useHomeController();
  const hasRules = Object.values(product.rules).some((rule) => rule === true);

  return (
    <tr key={product.product_code} className='bg-white border-b '>
      <td className="px-6 py-3">{product.product_code || '-' }</td>
      <td className="px-6 py-3">{product.name || '-' }</td>
      <td className="px-6 py-3">{product.sales_price ? formatCurrency(product.sales_price) : '-' }</td>
      <td className="px-6 py-3">{product.new_price ? formatCurrency(product.new_price) : '-'}</td>
      <td className="px-6 py-3">
        {!hasRules && (
        <p><CheckCircledIcon /></p>
        )}

        {hasRules && (
          Object.keys(product.rules).map((rule) => (
            product.rules[rule as keyof ProductRules] && (
            <p key={rule}>{buildRuleMessage(rule)}</p>
            )
          ))
        )}
      </td>
    </tr>
  );
}
