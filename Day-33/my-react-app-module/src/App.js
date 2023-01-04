import 'bootstrap-icons/font/bootstrap-icons.css'
import Product1 from './Product1'
// import Product2 from './Product2'
// import Product3 from './Product3'
// import Product4 from './Product4'
// import ProductFunc1 from './ProductFunc1'
// import ProductFunc2 from './ProductFunc2'
// import ProductFunc3 from './ProductFunc3'
// import ProductFunc4 from './ProductFunc4'

import ProductFunc from './ProductFunc';
import products from './seed';

import './App.css';


function App() {

  const productList = products.map((product) => {
    // console.log(product)
    return <ProductFunc
      title={product.title}
      description={product.description}
      productImageUrl={product.productImageUrl}
      submitterAvatarUrl={product.submitterAvatarUrl}
      votes={product.votes}
      url={product.url}
    />
  })

  const productList2 = products.map((product) => {
    // console.log(product)
    return <Product1
      title={product.title}
      description={product.description}
      productImageUrl={product.productImageUrl}
      submitterAvatarUrl={product.submitterAvatarUrl}
      votes={product.votes}
      url={product.url}
    />
  })

  return (
    <div className="app">

      {/* Function component */}
      {productList}

      {/* Class component*/}
      {/* {productList2} */}
    </div>
  );

}

export default App;
