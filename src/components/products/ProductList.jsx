import React from 'react';
import { productData } from '../../actions/productAction';
import { useDispatch } from 'react-redux';


const ProductList = (props) => {
    
    let dispatch  = useDispatch();

    const {id, name, img, price, available} = props;

    const Button = ({available}) =>{
        if(available === 1)
        return ( <button 
                    className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib navy btn-primary"
                    onClick={()=>{dispatch(productData({id, name, img, price, units: 1}))}}
                    >
                    add to cart
                </button>)
        else
        return ( <button 
                    className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib navy btn-danger" disabled>
                    add to cart
                </button>)
    }


    return(
        <>
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <img src={img} className="br-100 h4 w4 dib ba b--black-05 pa2" title={name} alt={name} />
            <h1 className="f3 mb2">{name}</h1>
            <h2 className="f5 fw4 gray mt0">$ {price}</h2>
            
            <div className="ph3">
                <Button available={available} />
            {/* { available == 1 ?
              <button 
                    className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib navy"
                    onClick={(e)=>{console.log(id)}}
                    >
                    add to cart
                </button>
                :
                    <button 
                    className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib navy" disabled>
                    not available
                </button> 
            } */}
            </div>
            </div>
            </article>
            
        </>
    )
}

export default ProductList;