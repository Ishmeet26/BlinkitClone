import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/api';
import { addtoCart, removeFromCart } from '../store/shopSlice';
import './styles.css'
const ProductDetail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shop)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchProductData = async () => {
      try {
        setLoading(true);

        const data = await getProductById(id);
        let quantity = cart.find(item => item.id === Number(id))?.quantity || 0
        setProduct({ ...data, quantity: quantity })
      } catch (error) {
        console.error('error in fetching product:', error)
      } finally {
        setLoading(false);
      }
    }

    fetchProductData();
  }, [id])

  useEffect(() => {

    if (product) {
      const cartItem = cart.find(item => item.id === Number(id))
      setProduct((prev) => ({
        ...prev,
        quantity: cartItem?.quantity || 0
      }))
    }
  }, [cart])


  if (loading) {
    return <div>Loading</div>
  }

  return (

    <div className='product-details'>
      {/* img side  */}
      <div className='left-section' >
        <img
          src={product?.image}
          alt={product?.title}
          style={{ width: '100%', height: '100%', maxWidth: '450px', maxHeight: '450px' }}
        />
      </div>

      <div className='right-section'>
        <div className='heading'>
          <h2 className='mb-0 mt-0 font-sans text-xl text-Grey-500 font-bold'>{product?.title}</h2>
        </div>

        <p className='mb-0 mt-0 font-sans text-sm text-Grey-500 font-medium'>₹{product?.price}</p>

        <div style={{ display: 'flex', justifyContent: "start", alignItems: 'center', gap: '12px' }}>
          <button className='add-cart' onClick={() => dispatch(addtoCart(product))}>Add</button>
          <button className='add-cart' onClick={() => dispatch(removeFromCart(product))}>Remove</button>
        </div>

        <p className='font-sans font-bold text-base text-Grey-500'>{product?.quantity > 0 ? `Item Added :  ${product?.quantity}` : null}</p>

      </div>
    </div >
  )
}

export default ProductDetail