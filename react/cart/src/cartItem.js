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
		// this.increaseQuantity = this.increaseQuantity.bind(this);
	}

     increaseQuantity = () =>{
     	console.log('this.state',this.state);
     }

	render(){
		const{price,title,qty} = this.state; // object destructuring
		return(
		<div className="class-item">

		 <div className="left-block">

		  <img style={styles.image} alt=""/>
		 	
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
                 onClick= {this.increaseQuantity}
                  />

                <img 
                alt="Decrease" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                />

                <img 
                alt="Delete" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                />

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