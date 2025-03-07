export default function SmartBack() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full px-4">
        <div className="flex justify-between w-full max-w-4xl mb-8">
          <div className="bg-[rgba(7,18,29,1)] rounded-lg p-6 w-1/3 text-center">
            <h3 className="text-xl font-bold mb-2">01</h3>
            <p>The chip in the card generates a random private key which never gets exposed.</p>
          </div>
          <div className="bg-[rgba(7,18,29,1)] rounded-lg p-6 w-1/3 text-center">
            <h3 className="text-xl font-bold mb-2">02</h3>
            <p>The cards establish a secure connection with each other and transfer your encrypted private keys.</p>
          </div>
          <div className="bg-[rgba(7,18,29,1)] rounded-lg p-6 w-1/3 text-center">
            <h3 className="text-xl font-bold mb-2">03</h3>
            <p>Keys are stored on three cards with no other copies to be found across space and time.</p>
          </div>
        </div>
        <div className="bg-[rgba(7,18,29,1)] rounded-lg p-6 w-full max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Qard chip keeps you safe on two fronts</h2>
          <div className="flex justify-around">
            <div className="text-center">
              {/* Add your biometric security icon here */}
              <p>Biometric security</p>
            </div>
            <div className="text-center">
              {/* Add your access code protection icon here */}
              <p>Access code protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
