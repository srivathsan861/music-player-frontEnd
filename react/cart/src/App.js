import React from 'react';
import Cart from './cart.js';
import Navbar from './navbar.js';


class App extends React.Component {

constructor(){
super();
this.state = {
 products: [
  {
    price: 999,
    title: "Watch",
    qty: 1,
    img: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    id: 1
  },
  {
    price: 9999,
    title: "Mobile Phone",
    qty: 10,
    img: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    id: 2
   },
   {
    price: 49999,
    title: "Laptop",
    qty: 4,
    img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    id: 3
    }
          ]
};
}
  handleIncreaseQuantity = (product) => {
     console.log('Hey please increase the qty of ', product);
     const{products} = this.state;
     const index = products.indexOf(product);
     products[index].qty += 1;
     this.setState({
      // products: products
      // shorthand
      products
     })
  }

  handleDecreaseQuantity = (product) => {
     console.log('Hey please decrease the qty of ', product);
     const{products} = this.state;
     const index = products.indexOf(product);

     if(products[index].qty === 0){
         return;
     }

     products[index].qty -= 1;
     this.setState({
      // products: products
      // shorthand
      products
     })
  }

  handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id); //it will return an array without that particular id

    this.setState({
       products: items
    })
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () => {
     const {products} = this.state;
     let cartTotal = 0;
     products.map((product) => {
        cartTotal = cartTotal + product.qty * product.price
     })
     return cartTotal;
  }

  render(){
    const {products} = this.state;
  return (
    <div className="App">
      <Navbar
        count = {this.getCartCount()}
       />
      <Cart
      products = {products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      />

      <div style={ {padding: 10, fontSize: 20} }> TOTAL: {this.getCartTotal()}</div>

    </div>
  );
}
}

export default App;
