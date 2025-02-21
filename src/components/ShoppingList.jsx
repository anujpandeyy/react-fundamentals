import React from 'react';

export default function ShoppingList(){
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
      ];
      const listItems = products.map(products=>
        <li
        key={products.id}
        style={{
            color: products.isFruit ? "red" : "green"
        }}
        >{products.title}</li>
      );
    return (
        <>
        <ul>{listItems}</ul>
        </>
    );
}