import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShoppingContext } from '../context/CartContext';
import { RiDeleteBin2Line } from 'react-icons/ri';



const Cartt = () => {
  const { cartItems, totalPrice, increaseQty, decreaseQty, removeCartItem, clearCart } = useShoppingContext();
  const navigate = useNavigate();

  const handleIncreaseQty = (id: number | undefined) => {
    if (id !== undefined) {
      increaseQty(id);
    }
  };

  const handleDecreaseQty = (id: number | undefined) => {
    if (id !== undefined) {
      decreaseQty(id);
    }
  };

  const handleRemoveCartItem = (id: number | undefined) => {
    if (id !== undefined) {
      removeCartItem(id);
    }
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <h2>Your Cart</h2>
        <p>Your cart is currently empty.</p>
        <Link to="/">Back to shopping</Link>
      </div>
    );
  }
  const formatCurrency = (amount: number | undefined) => {
    if (typeof amount === 'number') {
      return `$${amount.toFixed(2)}`;
    }
    return ''; 
  }
  return (
    <div className="row col-9 m-0 mx-auto text-center" >
      <h3 >Checkout</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => {
            return (
              <tr key={item.id}>
                <td><img src={item.img} style={{ width: 100 }} className='img-fluid rounded' alt={item.name} /></td>
                <td>{item.name}</td>
                <td>{formatCurrency(item.price)}</td>
                <td>
                  <button type="button" className="btn btn-sm btn-primary me-1" onClick={() => item.id !== undefined && decreaseQty(item.id)}><strong>-</strong></button>
                  {item.qty}
                  <button type="button" className="btn btn-sm btn-primary ms-1" onClick={() => item.id !== undefined && increaseQty(item.id)}><strong>+</strong></button>
                </td>
                <td>{formatCurrency(item.price * item.qty)}</td>
                <td>
                  <button className="btn btn-sm btn-danger btn-remove" onClick={() => item.id !== undefined && removeCartItem(item.id)}>
                  <RiDeleteBin2Line />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='col-md-12'>
        <span className='float-end me-2'><strong>Total: {formatCurrency(totalPrice)}</strong></span>
      </div>
      <div className='col-md-12 mt-5'>
        <Link to='/products' className='btn btn-sm btn-primary float-start'>Continue shopping</Link>
        <button className='btn btn-sm btn-success float-end me-2 d-block' onClick={() => {
          clearCart()
          navigate('/cart')
        }}>Place Order</button>
      </div>
    </div>
  );
};
export default Cartt