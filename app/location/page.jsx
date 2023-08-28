import TopBar from '@/components/TopBar'

const page = () => {
  return (
    <div>
      <TopBar />
      <div className="my-10 lg:w-2/3 xl:w-1/2 mx-auto">
        <h2 className="heading-3 text-center mb-16 text-gray-700 w-[90%] mx-auto">
          VISIT OUR STORES DIRECTLY TODAY!
        </h2>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <div className="w-[90%] lg:w-3/5">
              <iframe
                width="100%"
                height="300"
                title="PetersBurg"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nazara,banani+(Nazara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                {/* <a href="https://www.maps.ie/distance-area-calculator.html">
                  measure acres/hectares on map
                </a> */}
              </iframe>
            </div>
            <div className="w-[90%] lg:w-2/5 flex flex-col gap-y-4 text-lg text-center">
              <h2 className="text-2xl font-semibold">BANANI SHOWROOM</h2>
              <p className="border-b-2 pb-2">
                Block H, Hs 47, Rd No. 11, Dhaka 1213
              </p>
              <div>
                <p>Working Hours: 11 am - 9.30 pm</p>
                <p>Sunday off</p>
              </div>
              <p>Phone: 01752-556120</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-[90%] lg:w-3/5">
              <iframe
                width="100%"
                height="300"
                title="PetersBurg"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nazara,dhanmondi+(Nazara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                {/* <a href="https://www.maps.ie/distance-area-calculator.html">
                  area maps
                </a> */}
              </iframe>
            </div>
            <div className="w-[90%] lg:w-2/5 flex flex-col gap-y-4 text-lg text-center">
              <h2 className="text-2xl font-semibold">DHANMONDI SHOWROOM</h2>
              <p className="border-b-2 pb-2">
                House 22/B, Road 02 Dhanmondi R/A, Dhaka 1205
              </p>
              <div>
                <p>Working Hours: 11 am - 9.30 pm</p>
                <p>Tuesday off</p>
              </div>
              <p>Phone: 01752-556120</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-[90%] lg:w-3/5">
              <iframe
                width="100%"
                height="300"
                title="PetersBurg"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nazara,banani+(Nazara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                {/* <a href="https://www.maps.ie/distance-area-calculator.html">
                  measure acres/hectares on map
                </a> */}
              </iframe>
            </div>
            <div className="w-[90%] lg:w-2/5 flex flex-col gap-y-4 text-lg text-center">
              <h2 className="text-2xl font-semibold">OFFICE</h2>
              <p className="border-b-2 pb-2">
                Block C, 1st Floor, House 111 Road 8, Dhaka 1213
              </p>
              <div>
                <p>Working Hours: 11 am - 8.00 pm</p>
                <p>Friday off</p>
              </div>
              <p>Phone: 01752-556120</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
