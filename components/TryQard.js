import Image from 'next/image';

export default function TryQard() {
  return (
    <section className="w-full min-h-[50vh] md:min-h-[70vh] bg-black flex items-center justify-center">
      {/* Centered Image */}
      <div className="relative w-full md:w-[90%] h-[500px] md:h-[700px] flex items-center justify-center">
        <Image
          src="/truqardframe.svg"  // Ensure this path is correct
          alt="Qard Frame"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
      </div>
    </section>
  );
}