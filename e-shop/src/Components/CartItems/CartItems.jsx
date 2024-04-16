import React, { useContext } from 'react'
import'./CartItems.css'
import { ShopContext } from '../../Context/ShopContext';

const myImage = require('../Assets/cross_icon.png');

const CartItems = () => {

    const {getTotalCartAmount,all_product,cartitems,addToCart,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
        {all_product.map((e)=>{
            if(cartitems[e.id]>0){
                return  <div>
                            <div className="cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <button className='cartitems-quantity'>{cartitems[e.id]}</button>
                                <p>${e.new_price*cartitems[e.id]}</p> 
                                <img className='cartitems-remove-icon'src={myImage} onClick={()=>removeFromCart(e.id)} alt="" />   
                            </div>
                            <hr />
                        </div>    
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <p>Shopping Free</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROXEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code , enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default CartItems
