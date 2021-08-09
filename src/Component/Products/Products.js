import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
const Products = () => {
    const Products = [
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: '10$'},
        {id: 2, name: 'Macbook', description: 'Apple Macbook Pro', price: '1000$'}
    ]
    return (
        <main>
            <Grid container justify="center">
                {
                    Products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products
