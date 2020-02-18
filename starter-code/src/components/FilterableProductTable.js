import React, {Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
    state = {
        query: '',
        instockOnly: false
    }

    handleQuery = (ev) => {
        this.setState({
            query: ev.target.value
        })
    }

    handleStock = () => {
        this.setState({
            instockOnly: !this.state.instockOnly
        })
    }


    render() {
        let products = this.props.products.data
        let query = this.state.query


        products = products.filter(product => {
            if(this.state.instockOnly === true ) {
                return (product.name.includes(query)) && (product.stocked === true)
            } else {
                return product.name.includes(query)
            }
        } )

        return(
            <div>
                <h1>IronStore</h1>
                <SearchBar products={products}
                    query={this.state.query} handleQuery={this.handleQuery}
                    instockOnly={this.state.instockOnly} handleStock={this.handleStock}
                />
                <ProductTable  products={products}/>
            </div>
    )

    }



}

export default FilterableProductTable