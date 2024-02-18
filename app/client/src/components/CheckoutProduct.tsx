import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import { useDispatch } from 'react-redux'
import { removeFromCart, addNumber } from '../redux/reducers/basket'

interface Props {
  title: string
  description: string
  id: number
  image: string
  rating: number
  price: number
  hasPrime: unknown
  count: number
}
const CheckoutProduct: React.FC<Props> = ({
  title,
  description,
  id,
  image,
  rating,
  price,
  hasPrime,
  count,
}) => {
  const dispatch = useDispatch()

  const removeItemFromCart = () => {
    dispatch(
      removeFromCart({
        id: id,
      })
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value)
    if (!isNaN(newQuantity)) {
      dispatch(
        addNumber({
          id: id,
          num: newQuantity,
        })
      )
    }
  }

  return (
    <div className="flex flex-col items-center md:flex-row bg-white pl-[10px] pt-[10px] mt-20">
      <img className="w-[80px] md:w-[120px] h-[170px]" src={image} alt="" />
      <div className="md:ml-10 flex flex-col justify-between">
        <p className="mt-2 font-bold">{title}</p>
        <>
          <div>
            {Array(Math.round(rating))
              .fill(undefined)
              .map((_, index) => (
                <StarIcon key={index} className="text-yellow-400 w-2" />
              ))}
          </div>
          <p className="text-xs  line-clamp-2 my-2">{description}</p>
          <p className="">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          {hasPrime && (
            <div className="flex items-center">
              <img
                className="w-[30px]"
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF"
                alt=""
              />
              <p className="text-xs">Free delivery</p>
            </div>
          )}
          <div className="flex items-center">
            <div className="flex items-center my-[10px]">
              <div>Qty:</div>
              <div className="h-fit w-[60px] flex items-center   ml-[5px] shadow-md">
                <input
                  id="count"
                  name="count"
                  value={count}
                  type="number"
                  onChange={handleChange}
                  className="outline-none w-full overflow-hidden pl-2"
                />
              </div>
            </div>
            <button
              className=" button w-[130px] h-[35px] md:w-[150px] ml-[15px]"
              onClick={removeItemFromCart}
            >
              Remove from cart
            </button>
          </div>
        </>
      </div>
    </div>
  )
}

export default CheckoutProduct
