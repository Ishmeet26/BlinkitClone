import React, { useEffect } from 'react'
import { getAllProducts } from '../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, setAllProducts } from '../store/shopSlice'
import './styles.css'
import { useNavigate } from 'react-router-dom'
const ProductList = () => {

  const { allProducts } = useSelector((state) => state.shop)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {

    const fetchData = async () => {
      const data = await getAllProducts();
      dispatch(setAllProducts(data))
    }

    fetchData()
  }, [])

  return (
    <div className='product-list'>
      {allProducts.map((product) => (
        <div key={product?.id} className='product' onClick={() => navigate(`./product/${product?.id}`)}>
          <img src={product?.image} alt="product"
            style={{ width: '140px', height: '140px' }} />

          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className='mb-0 mt-0 font-sans text-lg text-Grey-500 font-bold'>{product?.title}</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='font-sans text-Grey-500 text-sm font-normal'>
              <p className='mb-0 mt-0 font-sans text-sm text-Grey-500 font-medium'>₹{product?.price}</p>
              <button className='add-cart' onClick={(e) => {
                e.stopPropagation()
                dispatch(addtoCart(product))
              }}>Add</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList