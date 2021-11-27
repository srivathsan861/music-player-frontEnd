import React from 'react';

class CartItem extends React.Component{
	render(){
		return(
		<div className="class-item">

		 <div className="left-block">

		  <img style={styles.image} alt=""></img>
		 	
		 </div>

		 <div className="right-block">
		    <div style={{fontSize:25}}>Phone</div>
		    <div style={{color:"grey"}}>Rs 999</div>
		 	<div style={{color:"grey"}}>QTY:1</div>
		 	<div className="cart-item-actions">
		 		{/* {Buttons} */}
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