import React from 'react';
import CartItem from './cartItem.js';

class Cart extends React.Component{
  render(){
	 return(
           <div className="cart">
            <CartItem />
            <CartItem />
           </div>
	 );
   }
}

export default Cart;