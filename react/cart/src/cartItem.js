import React from 'react';

class CartItem extends React.Component{
	constructor(){
		super();
		this.state = {
			price: 999,
			title: "Mobile Phone",
			qty: 1,
			img: ''
		}
	}
	render(){
		const{price,title,qty} = this.state; // object destructuring
		return(
		<div className="class-item">

		 <div className="left-block">

		  <img style={styles.image} alt=""></img>
		 	
		 </div>

		 <div className="right-block">
		    <div style={{fontSize:25}}>{title}</div>  {/*directly writing the object inside*/}
		    <div style={{color:"grey"}}>{price}</div>
		 	<div style={{color:"grey"}}>{qty}</div>
		 	<div className="cart-item-actions">
		 		{/* {Buttons} */}
                <img alt="Increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"></img>
                <img alt="Decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"></img>
                <img alt="Delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"></img>

		 	</div>
		 </div>
			
		</div>
		);
	}
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