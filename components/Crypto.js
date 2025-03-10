import Image from 'next/image'

const Crypto = () => {
  return (
    <section className="flex flex-row justify-between items-center bg-black px-3 sm:px-6 md:px-12 lg:px-24 py-6 md:py-16">
      <div className="relative w-[40%] md:w-auto">
        <div className="absolute inset-0 bg-[#0A84FF]/20 blur-[40px] md:blur-[100px] rounded-full"></div>
        <Image
          src="/iphone.svg"
          alt="Qard App Interface"
          width={300}
          height={600}
          className="relative z-10 transform -rotate-12 w-[140px] h-[280px] sm:w-[220px] sm:h-[440px] md:w-[350px] md:h-[700px]"
        />
      </div>

      <div className="w-[55%] md:w-[50%]">
        <h1 className="text-[1.25rem] sm:text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-tight font-medium mb-2 md:mb-12 text-white">
          Discover the power of<br />
          crypto with the Qard app.
        </h1>

        <div className="space-y-1">
          <div className="group p-1.5 sm:p-4 md:p-6 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-sm sm:text-lg md:text-2xl font-medium text-white">Manage</h2>
              <svg className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white transform rotate-0 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <p className="text-[#8a8a8e] mt-0.5 text-[10px] sm:text-sm md:text-base">
              Get access to live tickers for thousands of cryptocurrency coins and tokens.
            </p>
          </div>

          <div className="p-1.5 sm:p-4 md:p-6 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-sm sm:text-lg md:text-2xl font-medium text-white">Swap</h2>
              <svg className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="p-1.5 sm:p-4 md:p-6 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-sm sm:text-lg md:text-2xl font-medium text-white">Buy</h2>
              <svg className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="p-1.5 sm:p-4 md:p-6 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-sm sm:text-lg md:text-2xl font-medium text-white">Sell</h2>
              <svg className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="p-1.5 sm:p-4 md:p-6 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-sm sm:text-lg md:text-2xl font-medium text-white">Earn</h2>
              <span className="text-[8px] sm:text-xs text-[#0A84FF]">Coming soon</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-6 mt-3 md:mt-12">
          <div className="text-center">
            <Image src="/appleicon.svg" alt="Download on App Store" width={40} height={40} className="mx-auto w-4 h-4 sm:w-8 sm:h-8 md:w-[45px] md:h-[45px]" />
            <p className="text-white mt-0.5 text-[6px] sm:text-[10px] md:text-xs">App Store</p>
          </div>
          <div className="text-center">
            <Image src="/googleplayicon.png" alt="Get it on Google Play" width={40} height={40} className="mx-auto w-4 h-4 sm:w-8 sm:h-8 md:w-[45px] md:h-[45px]" />
            <p className="text-white mt-0.5 text-[6px] sm:text-[10px] md:text-xs">Play Store</p>
          </div>
          <div className="text-center">
            <Image src="/androidicon.svg" alt="Android APK Download" width={40} height={40} className="mx-auto w-4 h-4 sm:w-8 sm:h-8 md:w-[45px] md:h-[45px]" />
            <p className="text-white mt-0.5 text-[6px] sm:text-[10px] md:text-xs">APK</p>
          </div>
          <div className="text-center">
            <Image src="/qrxcanicon.svg" alt="Scan QR" width={40} height={40} className="mx-auto w-4 h-4 sm:w-8 sm:h-8 md:w-[45px] md:h-[45px]" />
            <p className="text-white mt-0.5 text-[6px] sm:text-[10px] md:text-xs">Scan QR</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Crypto
