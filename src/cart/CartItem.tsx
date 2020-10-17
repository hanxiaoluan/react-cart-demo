import React from 'react'
import { CartItemType } from './'
export interface CartItemProps {
    item: CartItemType
    checked: boolean
    // eslint-disable-next-line no-unused-vars
    onCheckedChangeRef: {current: (cartItem: CartItemType, checked: boolean)=> void}
}
const isEqual = (preProps: CartItemProps, nextProps: CartItemProps) => preProps.checked === nextProps.checked
const CartItem= React.memo((props: CartItemProps) => {
	const { item, checked, onCheckedChangeRef } = props
	const { id, name, price } = item
	const onWrapCheckedChange = (e: React.ChangeEvent<HTMLInputElement>, item: CartItemType) => {
		onCheckedChangeRef.current(item, e.target.checked)
	}
	console.log('11')
	return (
		<li key={id}>
            <input type="checkbox" checked={checked} onChange={e => onWrapCheckedChange(e, item)} />
			<p>
				{name}
			</p>
			<p>
                $
				{price}
			</p>
		</li>
	)
}, isEqual)
export default CartItem