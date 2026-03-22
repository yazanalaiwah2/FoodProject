import { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../util/formatting'
import Button from './UI/Button'
import UserProgressContext from '../store/UserProgressContext'
import CartItem from './CartItem'

export default function Cart(){
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)

    function handleClose(){
        userProgressCtx.hideCart()
    }

    function handleGoToCheckout(){
        userProgressCtx.showCheckout()
    }

    const cartTotal = cartCtx.items.reduce((acc,cur)=> acc + cur.quantity * cur.price,0)
    return (
        <Modal className='cart' open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart'?handleClose:null}>
            <h2> Your Cart</h2>
            <ul>
                {cartCtx.items.map(item=>(
                   <CartItem key={item.id} {...item} onDecrease={()=> cartCtx.removeItem(item.id)} onIncrease={()=>cartCtx.addItem(item)} />
                ))}
            </ul>
            <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
            <p className='modal-actions'>
                <Button textOnly onClick={handleClose}>Close</Button>
               {cartCtx.items.length > 0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button> } 

            </p>
        </Modal>
    )
}