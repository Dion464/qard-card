import Image from 'next/image'

const Crypto = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row-reverse justify-between items-center bg-black px-4 sm:px-8 md:px-12 lg:px-24 py-12 md:py-16">
      <div className="flex-1 max-w-full md:max-w-[45%] mt-12 md:mt-0">
        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-tight font-medium mb-8 md:mb-16 text-white">
          Discover the power of<br />
          crypto with the Qard app.
        </h1>

        <div className="space-y-2">
          <div className="group p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-medium text-white">Manage</h2>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transform rotate-0 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <p className="text-[#8a8a8e] mt-2 text-sm sm:text-base">
              Get access to live tickers for thousands of cryptocurrency coins and tokens, compare prices and make more informed investment decisions.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-medium text-white">Swap</h2>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-medium text-white">Buy</h2>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-medium text-white">Sell</h2>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-medium text-white">Earn</h2>
              <span className="text-sm text-[#0A84FF]">Coming soon</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8 mt-10 md:mt-16">
          <div className="text-center">
            <Image src="/appleicon.svg" alt="Download on App Store" width={40} height={40} className="mx-auto w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]" />
            <p className="text-white mt-2 text-xs sm:text-sm">Download on the App Store</p>
          </div>
          <div className="text-center">
            <Image src="/googleplayicon.png" alt="Get it on Google Play" width={40} height={40} className="mx-auto w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]" />
            <p className="text-white mt-2 text-xs sm:text-sm">Get it on Google Play</p>
          </div>
          <div className="text-center">
            <Image src="/androidicon.svg" alt="Android APK Download" width={40} height={40} className="mx-auto w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]" />
            <p className="text-white mt-2 text-xs sm:text-sm">Android APK Download</p>
          </div>
          <div className="text-center">
            <Image src="/qrxcanicon.svg" alt="Scan QR" width={40} height={40} className="mx-auto w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]" />
            <p className="text-white mt-2 text-xs sm:text-sm">Scan QR</p>
          </div>
        </div>
      </div>

      <div className="relative flex-1 w-full md:w-auto mx-auto">
        <div className="absolute inset-0 bg-[#0A84FF]/20 blur-[100px] rounded-full"></div>
        <Image
          src="/iphone.svg"
          alt="Qard App Interface"
          width={300}
          height={600}
          className="relative z-10 transform -rotate-12 w-[250px] h-[500px] sm:w-[300px] sm:h-[600px] md:w-[400px] md:h-[800px]"
        />
      </div>
    </section>
  )
}

export default Crypto
