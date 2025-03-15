import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <div className="container">
        <h1 style={{ display: 'flex', margin: '20px' }}>Products</h1>
      </div>
      <div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {products && products.map(item => {
            return (
              <div key={item.id} style={{ border: '1px solid black', margin: '5px', padding: '5px' }}>
                <Card title={item.title} price={item.price + '$'} description='good quality light with taiz roshni with long live' image={item.image} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App