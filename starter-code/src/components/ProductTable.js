import React, {Component } from 'react'
import ProductRow from './ProductRow'


class ProductTable extends Component {

    render() {
        let Products = this.props.products 


        return(
            <div>
                <ul>
                <li className='title'>
                    <p>Name</p>
                    <p>Price</p>
                </li>
                {Products.map(product => 
                    <li key={product.id}>
                        <ProductRow name={product.name} price={product.price} stock={product.stocked}/>
                    </li>
                )}
                </ul>
            </div>
    )

    }



}

export default ProductTable