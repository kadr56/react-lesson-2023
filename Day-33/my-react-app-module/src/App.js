import 'bootstrap-icons/font/bootstrap-icons.css'
import Product1 from './Product1'

import { useState } from 'react'
import ProductFunc from './ProductFunc';
import products from './seed';

import './App.css';


function App() {

  const [productList, setProductList] = useState(products)


  function handleProductUpVote(productId) {
    // console.log('UpVoted ID = ', productId)
    // const foundProduct = products.filter(product => {
    //   if (product.id == productId) {
    //     return product
    //   }
    // })
    // console.log(products)

    // console.log(foundProduct[0].votes)
    // foundProduct[0].votes = foundProduct[0].votes + 1;
    // console.log(foundProduct[0].votes)

    // Change votes in product Array

    const newProducts = productList.map(product => {
      if (product.id == productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        })
      } else {
        return product
      }
    })
    console.log(newProducts)
    setProductList(newProducts)
  }


  function handleProductDownVote(productId) {

    const newProducts = productList.map(product => {
      if (product.id == productId) {

        const newVotes = product.votes - 1;
        product.votes = newVotes;
        return product;

        // return Object.assign({}, product, {
        //   votes: product.votes - 1
        // })

      } else {
        return product
      }
    })
    console.log(newProducts)
    setProductList(newProducts)
  }

  const productComponent = productList.map((product) => {
    // console.log(product)
    return <ProductFunc
      title={product.title}
      description={product.description}
      productImageUrl={product.productImageUrl}
      submitterAvatarUrl={product.submitterAvatarUrl}
      votes={product.votes}
      url={product.url}
      id={product.id}
      stars={product.stars}
      onVote={handleProductUpVote}
      downVote={handleProductDownVote}
    />
  })

  return (
    <div className="app">

      {/* Function component */}
      {productComponent}

      {/* Class component*/}
      {/* {productList2} */}
    </div>
  );

}

export default App;
