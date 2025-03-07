import React from 'react';

export default function AppFeatures() {
  return (
    <section className="w-full py-16 px-8 md:px-16 bg-qard-dark">
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-16 text-center">
        Discover the power of crypto with the Qard app.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div>
          {/* App screenshot placeholder */}
          <div className="h-[600px] w-full bg-gradient-to-br from-blue-400 to-blue-900 rounded-2xl"></div>
        </div>
        
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-2xl font-bold">Manage</h3>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <p className="text-gray-400">
              Get access to live tokens for thousands of cryptocurrency coins and tokens, compare prices and make more informed investment decisions.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-2xl font-bold">Swap</h3>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-2xl font-bold">Buy</h3>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-2xl font-bold">Sell</h3>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-2xl font-bold">Earn</h3>
              <span className="text-blue-400 text-sm">Coming soon</span>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          
          <div className="flex space-x-6 mt-auto">
            <div className="w-32 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white">App Store</span>
            </div>
            <div className="w-32 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white">Google Play</span>
            </div>
            <div className="w-32 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white">Android APK</span>
            </div>
            <div className="w-32 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white">QR Code</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-white text-3xl font-bold mb-8">
          Access to thousands of digital assets
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Crypto icons placeholders */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="w-16 h-16 bg-gray-700 rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
} 