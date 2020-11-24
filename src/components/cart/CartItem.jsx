import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteCart, addOneItem, subOneItem } from '../../actions/productAction';

const CartPage = () => {
    const cartVal = useSelector((state)=>state.product.cart);
    const cartSubtotal = useSelector((state)=>state.product.cartSubtotal);
    let cartData;
    let dispatch = useDispatch();
    if(cartVal.length > 0){
        cartData =  <div>
                <table id="cart" className="table table-hover table-condensed">
                <thead>
                    <tr>
                        <th style={{width:"50%"}}>Product</th>
                        <th style={{width:"10%"}}>Price</th>
                        <th style={{width:"12%"}}>Quantity</th>
                        <th style={{width:"18%"}} className="text-center">Subtotal</th>
                        <th style={{width:"10%"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                { cartVal.map((cartproduct, index) => 
                    <tr key={index}>
                        <td data-th="Product">
                            <div className="row">
                                <div className="col-sm-2 hidden-xs product-img"><img src={cartproduct.img} alt={cartproduct.name} className="img-responsive"/></div>
                                <div className="col-sm-10">
                                <h4 className="nomargin">{cartproduct.name}</h4>
                                    <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </td>
                        <td data-th="Price">$ {cartproduct.price}</td>
                        <td data-th="Quantity">
                            <button 
                                className="btn btn-success btn-sm"
                                onClick={(e)=> dispatch(addOneItem(cartproduct))}
                            >+</button>
                            <span className="ml-1 mr-1">{cartproduct.units}</span>
                            <button 
                                className="btn btn-danger btn-sm"
                                onClick={(e) => dispatch(subOneItem(cartproduct))}
                                >-</button>
                        </td>
                        <td data-th="Subtotal" className="text-center">$ {cartproduct.units * cartproduct.price}</td>
                        <td className="actions" data-th="">
                            <button className="btn btn-danger btn-sm" onClick={(e) => dispatch(deleteCart(cartproduct))}>X</button>								
                        </td>
                    </tr>
                )}
                </tbody>
                <tfoot>
                    <tr>
                        <td><Link to="/products" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                        <td colspan="2" className="hidden-xs"></td>
                        <td className="hidden-xs text-center"><strong>Total $ { cartSubtotal }</strong></td>
                        <td><Link to="check-out" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></Link></td>
                    </tr>
                </tfoot>
            </table>    
        </div>;
    }else{
        cartData = <><hr /><h2>No Data found</h2></>;
    }
    return <>
        <div className="container">
            <h2 className="mt-3" style={{color: "GrayText"}} > Cart Details </h2>
            {cartData}
        </div>
    </>;
}

export default CartPage;