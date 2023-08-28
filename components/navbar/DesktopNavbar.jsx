'use client'
import Image from 'next/image'
import Link from 'next/link'
import Cart from '../shopping-cart/Cart'
import SignIn from '../authentication/SignIn'
import SignUp from '../authentication/SignUp'
import { useCallback, useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import axios from 'axios'
import Loader from '../Loader'

const DesktopNavbar = () => {
  const apiUrl = `${process.env.API_URL}/api/v1/product/categories`
  const [categories, setCategories] = useState(null)
  const [auth, setAuth] = useState('signIn')
  const [isAuth, setIsAuth] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [imgUrl, setImgUrl] = useState(null)

  const jsonStr = getCookie('userAuthCredential')

  const getCookieData = useCallback(() => {
    if (jsonStr != null) {
      const obj = JSON.parse(jsonStr)
      setImgUrl(obj.imageUrl)
    }
  }, [jsonStr])

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl)
      if (response.status === 200) {
        setCategories(response.data.newData)
      }
    } catch (error) {
      console.error(error)
    }
  }, [apiUrl])

  useEffect(() => {
    getCookieData()
    fetchData()
  }, [getCookieData, jsonStr, apiUrl, fetchData])

  const handleAuth = () => {
    setIsCartOpen(false)
    setIsAuth(!isAuth)
  }

  const handleCartOpen = () => {
    setIsAuth(false)
    setIsCartOpen(!isCartOpen)
  }

  if (!categories) {
    return <Loader height="h-[15vh]" />
  }

  return (
    <div className="hidden lg:block container py-4">
      <div className="flex justify-between items-center relative">
        <div className="w-1/4">
          <Link href="/" className="bg-[#910000] px-2 py-1 text-base">
            EXCLUSIVE WOMAN WEAR
          </Link>
        </div>
        <div className="w-2/4 flex justify-center">
          <Link className="w-max" href="/">
            <Image
              src="/images/nazara-navbar-logo.png"
              alt="logo"
              width={250}
              height={90}
            />
          </Link>
        </div>
        <div className="w-1/4">
          <div className="flex gap-x-6 justify-end">
            {/* User Authentication  */}
            <div className="relative">
              {imgUrl != null ? (
                <Link href="/user-dashboard">
                  <Image
                    src={imgUrl}
                    alt="logo"
                    width={23}
                    height={23}
                    className="cursor-pointer rounded-full h-7 w-7 shadow-md border-2 border-red-800 outline outline-1 outline-white"
                  />
                </Link>
              ) : (
                <Image
                  src="/images/logo/user.svg"
                  alt="logo"
                  width={23}
                  height={23}
                  className="cursor-pointe"
                  onClick={handleAuth}
                />
              )}
              {/* User Authentication Content */}
              {isAuth && (
                <>
                  {auth === 'signIn' && (
                    <SignIn setAuth={setAuth} setIsAuth={setIsAuth} />
                  )}
                  {auth === 'signUp' && (
                    <SignUp setAuth={setAuth} setIsAuth={setIsAuth} />
                  )}
                </>
              )}
            </div>
            {/* shopping cart  */}
            <div className="relative">
              <Image
                src="/images/logo/shopping-card.svg"
                alt="logo"
                width={23}
                height={23}
                className="cursor-pointer"
                onClick={() => handleCartOpen()}
              />
              {/* shopping cart content*/}
              {isCartOpen && <Cart />}
            </div>
          </div>
        </div>
        {/*  */}
      </div>

      <div className="flex justify-between items-center mt-2">
        <div>
          <ul className="flex gap-2 2xl:gap-4">
            <div className="group">
              <li className="font-medium relative bg-base-100 text-primary-color cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                NEW ARRIVALS
                <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
              </li>
              <div className="hidden z-20 text-text-color group-hover:block bg-base-100 absolute w-full left-0 top-[160px] shadow-xl">
                <div className="flex justify-between w-2/3 mx-auto py-6">
                  <ul className="flex flex-col gap-y-2">
                    <li className="text-primary-color font-semibold">SALE</li>
                    <li>NEW ARRIVALS</li>
                    <li>READY TO SHIP</li>
                    <li>LIMITED STOCK</li>
                    <li>DISCOUNT</li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <li className="text-primary-color font-semibold">
                      SHOP BY CATEGORY
                    </li>
                    {categories.map((elem, index) => {
                      if (index < 5) {
                        return (
                          <li key={index}>
                            <Link
                              href={`/products/categories/${elem.category}`}
                            >
                              {elem.category}
                            </Link>
                          </li>
                        )
                      }
                    })}
                  </ul>
                  <Image
                    src={categories[0].url}
                    alt="logo"
                    width={180}
                    height={64}
                    className="rounded-md border-2 border-[#d4af37]"
                  />
                  <Image
                    src={categories[6].url}
                    alt="logo"
                    width={180}
                    height={64}
                    className="rounded-md border-2 border-[#d4af37]"
                  />
                </div>
              </div>
            </div>
            {categories.map((elem, index) => {
              if (index < 3) {
                return (
                  <div className="group" key={index}>
                    <li className="font-medium relative cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                      {elem.category}
                      <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                    </li>
                    <div className="hidden text-text-color group-hover:block bg-base-100 absolute w-full left-0 top-[160px] z-20 shadow-xl">
                      <div className="flex justify-between w-2/3 mx-auto py-6">
                        <ul className="flex flex-col gap-y-2">
                          <li className="text-primary-color font-semibold">
                            SALE
                          </li>
                          <li>NEW ARRIVALS</li>
                          <li>READY TO SHIP</li>
                          <li>LIMITED STOCK</li>
                          <li>DISCOUNT</li>
                        </ul>
                        <ul className="flex flex-col gap-y-2">
                          <li className="text-primary-color font-semibold">
                            SHOP BY CATEGORY
                          </li>
                          {categories.map((elem, index) => {
                            if (index < 5) {
                              return (
                                <li key={index}>
                                  <Link
                                    href={`/products/categories/${elem.category}`}
                                  >
                                    {elem.category}
                                  </Link>
                                </li>
                              )
                            }
                          })}
                        </ul>
                        <Image
                          src={categories[3].url}
                          alt="logo"
                          width={180}
                          height={64}
                          className="rounded-md border-2 border-[#d4af37]"
                        />
                        <Image
                          src={categories[5].url}
                          alt="logo"
                          width={180}
                          height={64}
                          className="rounded-md border-2 border-[#d4af37]"
                        />
                      </div>
                    </div>
                  </div>
                )
              }
            })}
            <div>
              <li className="font-medium cursor-pointer text-sm px-2 py-1 rounded-lg hover:underline underline-offset-4">
                <Link href="/location">OUR LOCATIONS</Link>
              </li>
            </div>
          </ul>
        </div>
        <form className="">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="w-28 lg:w-32 xl:w-full p-2 pl-10 text-sm text-gray-900 rounded-full bg-gray-50 outline-none h-8"
              placeholder="Search on Nazara"
              required
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default DesktopNavbar
