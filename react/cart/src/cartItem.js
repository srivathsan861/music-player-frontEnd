import React from 'react';

class CartItem extends React.Component{
	// this.increaseQuantity = this.increaseQuantity.bind(this);
		// this.testing();
    
  // testing () {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 5000);
  //   })

  //   promise.then(() => {
  //     // setState acts like a synchronus call
  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     console.log('state', this.state);
  //   });
  // }
  

     increaseQuantity = () =>{
     	// this.state.qty += 1;
     	// console.log('this.state',this.state);
     	
     	//setState form 1
     	//setState triggers re-rendering of the page
     	// this.setState({   
     	// 	qty: this.state.qty + 1
     	// });
     	//setState form 2 - if prevState required use this
     	this.setState( (prevState)=>{
            return {
            	qty: prevState.qty + 1
            }
     	});
     }

     decreaseQuantity = () =>{
     	const {qty} = this.state;
     	if(qty === 0){
     		return;
     	}
     	this.setState( (prevState)=>{
            return {
            	qty: prevState.qty - 1
            }
     	});
     }

	render(){
		const{price,title,qty} = this.props.product; // object destructuring
		return(
		<div className="cart-item">

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
                onClick= {this.decreaseQuantity}
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