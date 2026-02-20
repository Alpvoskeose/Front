import React from 'react';
import Card from './Card';
const products = [
    { id: 1, name: "widget", price: 9.99 },
     { id: 2, name: "gadget", price: 19.99 },
     { id: 3, name: "Super Widget", price: 29.99 }
];

function ProductList() {
    return (
        <div>
            {products.map(product => (
                <Card key={product.id} title={product.name}>
                    <p>Price: ${product.price}</p>
                </Card>
            ))}
        </div>
    );
}

export default ProductList;