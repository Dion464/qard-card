import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <Link href="/" className="mb-6">
            <Image
              src="/footerlogo.svg"
              alt="Qard Logo"
              width={120}
              height={48}
              className="transform -translate-x-1"
            />
          </Link>
      
        </div>
        
        <div className="flex gap-12 mt-8 md:mt-0 text-[15px]">
          <Link 
            href="/terms" 
            className="text-gray-400 hover:text-white transition-colors font-light"
          >
            Terms of use
          </Link>
          <Link 
            href="/privacy" 
            className="text-gray-400 hover:text-white transition-colors font-light"
          >
            Privacy policy
          </Link>
        </div>
      </div>

      {/* Enhanced glow effect */}
      <div 
        className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 122, 255, 0.25) 0%, rgba(0, 122, 255, 0.15) 25%, rgba(0, 122, 255, 0.05) 50%, rgba(0, 122, 255, 0) 100%)',
          transform: 'translate(30%, 60%)',
          filter: 'blur(50px)',
        }}
      />
      {/* Secondary glow for extra effect */}
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 122, 255, 0.3) 0%, rgba(0, 122, 255, 0) 100%)',
          transform: 'translate(30%, 60%)',
          filter: 'blur(30px)',
        }}
      />
    </footer>
  )
}

export default Footer
