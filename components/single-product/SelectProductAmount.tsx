import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// this enum is used to determine the behavior of the SelectProductAmount component
export enum Mode {
  SingleProduct = 'singleProduct',
  CartItem = 'cartItem',
}
// SelectProductAmountProps and SelectCartItemAmountProps define the shape of the props that the SelectProductAmount component expects
type SelectProductAmountProps = {
  mode: Mode.SingleProduct
  amount: number
  setAmount: (value: number) => void
}

type SelectCartItemAmountProps = {
  mode: Mode.CartItem
  amount: number
  setAmount: (value: number) => Promise<void>
  isLoading: boolean
}

// SelectProductAmount renders a dropdown menu to select a product amount
function SelectProductAmount(props: SelectProductAmountProps | SelectCartItemAmountProps) {
    const {mode, amount, setAmount} = props

    const cartItem = mode === Mode.CartItem

    return <>
    <h4 className="mb-4">Amount : </h4>
    <Select defaultValue={amount.toString()} onValueChange={(value) => setAmount(Number(value))}
        disabled={cartItem? props.isLoading : false}>
      <SelectTrigger className={cartItem ? 'w-[100px]' : 'w-[150px]'}>
        <SelectValue placeholder={amount}/>
      </SelectTrigger>
      <SelectContent>
        {Array.from({length: cartItem ? amount + 10 : 10}, (_, index) => {
            const selectValue = (index + 1).toString();
            return (
                <SelectItem key={selectValue} value={selectValue}>
                    {selectValue}
                </SelectItem>
            )
        })}
      </SelectContent>
    </Select>
    </>
}

export default SelectProductAmount