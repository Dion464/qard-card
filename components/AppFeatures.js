import Image from 'next/image';

export default function AppFeatures() {
  return (
    <div className="flex justify-center items-center py-2 md:py-8 bg-black px-1 md:px-0">
      <div className="grid grid-cols-2 gap-1 md:gap-4 w-full max-w-[800px]">
        {/* First card */}
        <div className="bg-[rgba(11,30,49,1)] p-2 md:p-4 rounded-[20px] md:rounded-[40px] h-[180px] md:h-[260px] flex items-end">
          <h2 className="text-white font-helvetica font-medium text-[12px] sm:text-[16px] md:text-[32px] leading-[1.2]">
            Simply tap the card<br />to your phone <span className="text-[#3594EC]">to use<br />Qard wallet</span>
          </h2>
        </div>

        {/* Second card - with gradient and phone image */}
        <div className="bg-gradient-to-b from-[#3594EC] via-[#184470] to-[#000209] p-2 md:p-4 rounded-[20px] md:rounded-[40px] h-[180px] md:h-[260px] relative overflow-hidden">
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="relative w-full h-full">
              <div className="absolute bottom-[-20px] sm:bottom-[-60px] left-1/2 transform -translate-x-1/2 z-10">
                <Image
                  src="/mobile.svg"
                  alt="Mobile"
                  width={150}
                  height={300}
                  className="w-[70px] h-[140px] sm:w-[100px] sm:h-[200px] md:w-[160px] md:h-[320px] object-contain"
                />
              </div>
              <div className="absolute top-[50px] sm:top-0 left-1/2 transform -translate-x-1/2 translate-y-[5px] z-0 w-[120px] sm:w-[160px] md:w-[240px]">
                <Image
                  src="/undermodile.png"
                  alt="Background"
                  width={300}
                  height={250}
                  className="object-contain w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Third card - blue background with card images */}
        <div className="bg-[#3594EC] p-2 md:p-4 rounded-[10px] md:rounded-[40px] h-[180px] md:h-[260px] relative overflow-hidden">
          <div className="text-white h-full flex flex-col justify-between">
            <div className="mb-auto mt-6 sm:mt-0">
              <h2 className="text-xs sm:text-sm md:text-lg font-normal leading-tight mb-2 md:mb-4">
                Wallet activation<br />takes less than
              </h2>
            </div>
            <p className="text-[12px] sm:text-[24px] md:text-[42px] font-bold leading-none">3 minutes</p>
          </div>
          <div className="absolute top-[-10%] right-[-10%] transform translate-x-[30%] -translate-y-[30%] scale-[0.6] sm:scale-70 md:scale-95">
            <Image
              src="/secondimage.png"
              alt="Qard cards"
              width={400}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        {/* Fourth card */}
        <div className="bg-[rgba(11,30,49,1)] p-2 md:p-4 rounded-[10px] md:rounded-[40px] h-[180px] md:h-[260px] flex items-end">
          <p className="text-gray-300 text-xs sm:text-sm md:text-lg leading-relaxed">
            During the activation process, the card's embedded chip generates a random private key, 
            <span className="text-white font-medium"> ensuring that the wallet cannot be compromised.</span>
          </p>
        </div>

        {/* Fifth card */}
        <div className="bg-[rgba(11,30,49,1)] p-2 md:p-4 rounded-[10px] md:rounded-[40px] h-[180px] md:h-[260px] flex items-end">
          <p className="text-gray-300 text-xs sm:text-sm md:text-lg leading-relaxed">
            A Qard Wallet set can contain up to three Qard cards. 
            <span className="text-white font-medium"> You get three equal cards to one wallet, just like having three identical keys to your room door.</span>
          </p>
        </div>

        {/* Sixth card */}
        <div className="bg-[rgba(11,30,49,1)] p-2 md:p-4 rounded-[10px] md:rounded-[40px] h-[180px] md:h-[260px] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[2.0] sm:scale-[0.8] md:scale-100 w-full">
            <Image
              src="/lastimage.svg"
              alt="Qard box"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
