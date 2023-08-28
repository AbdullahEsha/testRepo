import { BsBoxArrowUp, BsShield } from 'react-icons/bs'
import { HiShoppingBag } from 'react-icons/hi'
import { TbTruckDelivery } from 'react-icons/tb'
import PendingShipBadge from '../PendingShipBadge'
import { RxDotFilled } from 'react-icons/rx'
import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'

const ProductDetailsComponent = ({ data, toggleDrawer }) => {
  const [calculatePrice, setCalculatePrice] = useState(0)
  const [quantity, setQuantity] = useState(1)
  //set initial price
  useEffect(() => {
    setCalculatePrice(data?.salePrice)
  }, [data?.salePrice])

  const percentageReduction =
    ((data?.regularPrice - data?.salePrice) / data?.regularPrice) * 100

  const percentageFloor = Math.floor(percentageReduction)

  const date = new Date()
  // console.log("pp", percentageFloor);

  const [futureDate, setFutureDate] = useState(null)

  useEffect(() => {
    const currentDate = new Date()
    const futureDate = new Date(currentDate)
    futureDate.setDate(currentDate.getDate() + 3) // Add 10 days

    setFutureDate(futureDate)
  }, [])

  //handle price
  const handleIncreasePrice = () => {
    setCalculatePrice((prevPrice) => prevPrice + data?.salePrice)
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  // Function to decrease the price
  const handleDecreasePrice = () => {
    if (data?.salePrice < calculatePrice) {
      setCalculatePrice((prevPrice) => prevPrice - data?.salePrice)
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const clickCheck = (event) => {
    const jsonStr = getCookie('userAuthCredential')
    if (jsonStr != null) {
      const obj = JSON.parse(jsonStr)
      const testData = { testProduct: data?._id, testUser: obj._id, quantity }
      console.log('test event:', testData)
    }
  }

  return (
    <div className="flex flex-col gap-y-2 mt-4 lg:mt-0">
      {data && (
        <>
          <h3 className="font-bold text-2xl lg:text-xl">{data?.category}</h3>
          <p className="text-gray-500">{data?.sku}</p>
          <p className="flex items-center -ml-1 text-sm font-medium">
            <RxDotFilled size={30} color="green" />
            In Stock
          </p>
          {/* <p className="flex items-center -ml-1 text-sm">
              <RxDotFilled size={30} color="#820000" />
              Out of Stock
            </p> */}
          <div className="flex items-center gap-2">
            <p className="font-bold text-bold text-xl">
              BDT {calculatePrice}/-
            </p>
            <p className="line-through text-sm font-medium">
              BDT {data?.regularPrice}/-
            </p>
            <PendingShipBadge text={`${percentageFloor}%`} />
          </div>
          <button
            className="text-blue-500 flex items-center gap-1"
            onClick={toggleDrawer}
          >
            <BsBoxArrowUp />
            Size Chart
          </button>
          <div className="flex items-center gap-2">
            {data?.size?.map((data) => (
              <button
                key={data}
                className="px-2 py-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-600 font-normal"
              >
                {data}
              </button>
            ))}
          </div>

          <h2 className="font-medium">Color</h2>
          <div className="flex items-center gap-2">
            {data?.variant?.map((data) => (
              <button
                key={data}
                className="px-2 py-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-600 font-normal"
              >
                {data?.color}
              </button>
            ))}
            <button className="px-2 py-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-600 font-normal">
              PINK
            </button>
          </div>

          <h2 className="font-medium">Quantity</h2>
          <div className="flex items-center">
            <button
              onClick={handleDecreasePrice}
              className={`text-gray-500 border border-gray-300  hover:bg-gray-300 hover:text-gray-600 font-bold w-8 h-8 text-xl ${
                calculatePrice == data?.salePrice && 'cursor-not-allowed'
              }`}
            >
              -
            </button>
            <p className="text-gray-500 border border-gray-300 font-normal w-8 h-8 flex justify-center items-center">
              {quantity}
            </p>
            <button
              onClick={handleIncreasePrice}
              className="text-gray-500 border border-gray-300  hover:bg-gray-300 hover:text-gray-600 font-bold w-8 h-8 text-xl"
            >
              +
            </button>
          </div>

          <p className="flex items-center gap-1 justify-center bg-gray-100 py-1 text-sm font-medium">
            <TbTruckDelivery /> Estimated Shipping Date:
            {` ${futureDate.toDateString()}`}
          </p>

          <button
            onClick={clickCheck}
            className="w-full text-white flex justify-center items-center bg-gray-800 hover:bg-black gap-1 py-2 font-medium"
          >
            <HiShoppingBag size={20} /> Add To Cart
          </button>
        </>
      )}
    </div>
  )
}

export default ProductDetailsComponent
