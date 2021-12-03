import React from 'react';

const CartItem = (props) => {

		const{price,title,qty} = props.product; // object destructuring
		const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
		return(
		<div className="cart-item">
		 <div className="left-block">

		  <img style={styles.image} src={product.img} alt=""/>
		 	
		 </div>

		 <div className="right-block">
		    <div style={{fontSize:25}}>{title}</div>  {/*directly writing the object inside*/}
		    <div style={{color:"grey"}}>Rs {price}</div>
		 	<div style={{color:"grey"}}>Qty: {qty}</div>
		 	<div className="cart-item-actions">
		 		{/* {Buttons} */}
                <img
                 alt="Increase"
                 className="action-icons"
                 src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
                 onClick= {() => onIncreaseQuantity(product)}
                  />

                <img 
                alt="Decrease" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                onClick= {() => onDecreaseQuantity(product)}
                />

                <img 
                alt="Delete" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                onClick= {() => onDeleteProduct(product.id)}
                />

		 	</div>
		 </div>
			
		</div>

		);
}

const styles = {
	image: {
		height: 110,
		width: 110,
		borderRadius: 4,
		background: "grey"
	}
}

export default CartItem;