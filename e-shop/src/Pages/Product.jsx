import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DesctiptionBox/DescriptionBox.jsx';

const Product = () => {
  
  const { AllProducts } = useContext(ShopContext);
  const { productId } = useParams();
  
  // Verify if AllProducts is defined
  console.log("AllProducts:", AllProducts);
  
  // Convert productId to a number
  const productIdNumber = parseInt(productId);
  
  // Verify if productId is correctly extracted
  console.log("productId:", productIdNumber);

  // Find the product with the matching ID
  const product = AllProducts.find((e) => e.id === productIdNumber);

  // Verify if product is found
  console.log("product:", product);
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </div>
  )
}

export default Product
