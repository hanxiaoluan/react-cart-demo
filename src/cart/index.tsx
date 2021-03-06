import React, { useState, useEffect, useRef } from 'react'
import cartData from './data'
import CartItem from './CartItem'
export interface CartItemType {
    id: number
    name: string
    price: number
}
type CheckedMap = { [id: number]: boolean }
const Cart: React.FC<{}> = () => {
	const [ checkedMap, setCheckedMap ] = useState<CheckedMap>({})
	const onCheckedChangeRef = useRef<any>(null)
	const onCheckedChange = (cartItem: CartItemType, checked: boolean) => {
		const { id } = cartItem
		const newCheckedMap = { ...checkedMap, [id]: checked }
		setCheckedMap(newCheckedMap)
	}
	const sumPrice = () => {
		let sum = 0
		for (const item of cartData) {
			if(checkedMap[item.id]) {
				sum += item.price
			}
		}
		return sum
	}
	const onCheckedAll = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target
		const newCheckedMap: CheckedMap ={}
		cartData.map(item => { newCheckedMap[item.id]= checked })
		setCheckedMap(newCheckedMap)
	}
	useEffect(() => { onCheckedChangeRef.current =onCheckedChange })
	return <div>
		<ul>
			{cartData.map((item) => {	
				const checked = checkedMap[item.id] || false
				return <CartItem item={item} checked={checked} key={item.id} onCheckedChangeRef={onCheckedChangeRef} /> }
			
			)}
		</ul>
		<p>
			<input type="checkbox" name="" id="" onChange={onCheckedAll} />
全选 总价:
			{sumPrice()}
		</p>
	</div>
}
export default Cart