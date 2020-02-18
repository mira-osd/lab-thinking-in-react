import React, {Component } from 'react'

class ProductRow extends Component {
    render() {
        let {price, name, stock} = this.props

        if(stock === false ) {
            name = <span style={{color: 'red'}}>{name}</span>
        } 

        return(
            <div className='product-row'>
                <p>{name}</p>
                <p>{price}</p>
            </div>
    )

    }



}

export default ProductRow